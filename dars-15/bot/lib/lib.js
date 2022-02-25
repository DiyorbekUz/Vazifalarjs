class Bot{
    token = '5211684250:AAEBq0AaWc0z2_JjJ_toEghWOw3fMtCSW7A'
    async Updates(){
        let response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`)
        response = await response.json()
        for(let res of response.result){
            console.log(res.message);
        }
    }

    async sendMessage(chat_id, message){
		let response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chat_id,
				text: message
			})
		})
		console.log(response);
	}
    // async Updates()
}

let bot = new Bot()
console.log(bot.Updates());