class Bot {

	constructor(TOKEN) {
		this.TOKEN = TOKEN;
		this.URL = `https://api.telegram.org/bot${TOKEN}/`
		this.messageTypes = {}
	}

	start () {
		setInterval(async () => {
			let newMessage = await getUpdates()
			if(newMessage) {
				if(newMessage.message.text) {
					return this.messageTypes['text'](newMessage.message)
				}

				if(newMessage.message.voice) {
					return this.messageTypes['voice'](newMessage.message)
				}
				
			}
		}, 500)
	}

	on(message, callback) {
		this.messageTypes[message] = callback
	}

	async sendMessage (chatId, text, params) {
		let response = await fetch(this.URL + 'sendMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chatId,
				text,
				...params
			})
		})
		return response
	}

	async sendPhoto(chat_id, photo, params){
		let formData = new FormData()
		formData.append('chat_id', chat_id)
		formData.append(photo)
		formData.append(params)
		console.log(formData)
		let response = await fetch(this.URL + 'sendPhoto', {
			method: 'POST',
			headers: {},
			body: formData
		})
		return response
	}
}