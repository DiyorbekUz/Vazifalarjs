class Bot{
    token = '5211684250:AAEBq0AaWc0z2_JjJ_toEghWOw3fMtCSW7A'
    async Updates(){
        let response = await fetch(`https://api.telegram.org/bot${this.token}/getUpdates`)
        response = await response.json()
        for(let res of response.result){
            console.log(res.message);
        }
    }

    async sendMessage(chat_id, message){
		this.Updates()
		let response = await fetch(`https://api.telegram.org/bot${this.token}/sendMessage`, {
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
    // Updates()
}

let bot = new Bot()
console.log(bot.sendMessage(1815915910, 'hello'));