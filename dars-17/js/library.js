class Bot {
	constructor(TOKEN) {
		this.URL = `https://api.telegram.org/bot${token}`
		this.TOKEN = TOKEN
		this.eventTypes = {}
	}

	async getUpdates () {
		if(!this.getUpdates.messages) this.getUpdates.messages = []

		const messages = this.getUpdates.messages
		const lastSavedUpdateId = messages.at(-1)?.update_id
	
		let response = await fetch(this.URL + `/getUpdates?offset=` + lastSavedUpdateId)
		response = await response.json()

		const result = response.ok ? response.result : []

		if(messages.at(-1)?.update_id <= result.at(1)?.update_id) {
			result.shift()
			this.getUpdates.messages = result
			return result
		} else if(!messages.length && result.length) {
			this.getUpdates.messages = result
		}

		return
	}

	start () {
		setInterval(async () => {
			const messages = await this.getUpdates()
			if(!(messages && messages.length)) return
			
			for(let message of messages) {
				if(message.callback_query && this.eventTypes.callback_query) {
					return this.eventTypes['callback_query'](message.callback_query)
				} 
				else if(message.message.text && this.eventTypes.text) {
					return this.eventTypes['text'](message.message)
				} 
				else if(message.message.voice && this.eventTypes.voice) {
					return this.eventTypes['voice'](message.message)
				} 
				else if(message.message.document && this.eventTypes.document) {
					return this.eventTypes['document'](message.message)
				} 
				else if(message.message.photo && this.eventTypes.photo) {
					return this.eventTypes['photo'](message.message)
				} 
				else if(message.message.video && this.eventTypes.video) {
					return this.eventTypes['video'](message.message)
				}
			}
			
		}, 500)
	}

	on (event, callback) {
		this.eventTypes[event] = callback
	}

	async sendMessage (chatId, text, params) {
		let response = await fetch(this.URL + '/sendMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chatId,
				text: text,
				...params
			})
		})

		return await response.json()
	}

	async sendPhoto (chatId, photo, params) {
		let response = await fetch(this.URL + '/sendPhoto', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chatId,
				photo: photo,
				...params
			})
		})

		return await response.json()
	}

	async copyMessage (chatId, photo, params) {
		let response = await fetch(this.URL + '/copyMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chatId,
				photo: photo,
				...params
			})
		})

		return await response.json()
	}

}
