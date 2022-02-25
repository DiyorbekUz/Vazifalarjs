const token = '5211684250:AAEBq0AaWc0z2_JjJ_toEghWOw3fMtCSW7A'
const bot = new Bot(token)
let users = JSON.parse(window.localStorage.getItem('users')) ? JSON.parse(window.localStorage.getItem('users')) : []
function checkUser(array, chatId) {
	for(let index of array){
		if (index?.chat_id == chatId) {
			return false
		}
	}	
	return true
}

function getUser(chatId, temp, message_id){
	let anyIndex = 0
	let tempIndex = 0
	let anyCount = 0
	let tempCount = 0
	let count = 0
	let any = temp == 'like'? 'dislike' : 'like'
	for(let index in users){
		if(users[index].chat_id == chatId){
			count++
			console.log(users[index][any]);
			if(users[index][any].length){
				for(let i in users[index][any]){
					if(users[index][any][i] == message_id){
						anyIndex = index
						users[index][any].splice(i, 1)
						anyCount++
					}
					if(users[index][temp][i] == message_id){
						tempIndex = index
						users[index][temp].splice(i, 1)
						tempCount++
					}
				}
			}else{
				users[index][temp].push(message_id)
				window.localStorage.setItem('users', JSON.stringify(users))
				return
			}
		}
	}

	if (anyCount) {
		users[anyIndex][temp].push(message_id)
		window.localStorage.setItem('users', JSON.stringify(users))
		console.log(users);
	}

	if(tempCount){
		users[tempIndex][any].push(message_id)
		window.localStorage.setItem('users', JSON.stringify(users))
		console.log(users);
	}


	if(count == 0){
		users[users.length][temp].push(message_id)
		window.localStorage.setItem('users', JSON.stringify(users))
		console.log(users);
	}
}


async function getImg(text){
	let response = await fetch(`https://api.unsplash.com/search/?query=${text}&client_id=gWOLT5jBbt_gKOl8AWEqH_9isZBl56IcSH7PYcu30to`)
	let res = await response.json()
	return res?.photos?.results[0]?.links?.download
}


bot.on('text', async (msg) => {
	if(msg.text == '/start'){
		bot.sendMessage(msg.chat.id, 'Assalomu alekum bu bot siz hohlagan rasmni topib beradi\n\nLike bosgan rasmlarni olish uchun: /like\nDislike bosgan rasmlarni olish uchun: /dislike')
		if(checkUser(users, msg.chat.id)){
			users.push({
				chat_id: msg.chat.id,
				like: [],
				dislike: []
			});
			window.localStorage.setItem('users', JSON.stringify(users))
		}
		return
	}

	
	if(msg.text != '/start' && await getImg(msg.text)){
		bot.sendPhoto (msg.chat.id, await getImg(msg.text), {
			reply_markup: {
				inline_keyboard: [
					[ { text: '👍', callback_data: 'like' }, { text: '👎', callback_data: 'dislike' } ]
				] 
			}
		})
	}else{
		bot.sendMessage(msg.chat.id, 'O\'yin qima oooo')
	}

	if(msg.text == '/like'){
		for(let user in users){
			if(users[user].chat_id == msg.chat.id){
				for(let like of users[user].like){
					bot.sendPhoto (msg.chat.id, like,)
				}
			}
		}
	}

	if(msg.text == '/dislike'){
		for(let user in users){
			if(users[user].chat_id == msg.chat.id){
				for(let dislike of users[user].dislike){
					bot.sendPhoto (msg.chat.id, dislike,)
				}
			}
		}
	}
	
})

bot.on('callback_query', (data) => {
	getUser(data.from.id, data.data, data.message.photo[0].file_id)
})


bot.start()
