bot = new Bot(TOKEN)


bot.on('text', (msg) => {
	let chatId = msg.chat.id
	if(msg.text == '/photo') {
		bot.sendPhoto(chatId, 'yaxshiman')
	}

	if(msg.text == 'nima qilayapsan') {
		bot.sendMessage(chatId, 'sen bilan gaplashyapman')
	}
})

var options = {
	reply_markup: JSON.stringify({
	  inline_keyboard: [
		[ { text: '❤️', callback_data: '1' }, { text: '💔', callback_data: '2' } ]
	  ]
	})
  };

bot.sendPhoto(msg.chat.id, MSGURL, option);

/*
	sendDocument
	sendPhoto
	sendSticker
	sendLocation
	sendDice
*/


bot.start()
