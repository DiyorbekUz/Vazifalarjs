const fs = require('fs')

const map = [
	{
		src: [
			{
				controllers: [
					'index.js',
					'user.js',
				]
			},
			{
				routes: [
					'index.js',
					'user.js',
				]
			},
			'server.js',
			'context.js'
		]
	},
	'birnima.js',
	{
		model: [
			'model.sql',
			'query.sql'
		]
	},
	'config.js'
]


function createPaths (array, path = __dirname) {
	for(let el of array) {
		if(typeof(el) == 'string') {
			fs.writeFileSync(path + `/${el}`, '')
		}

		if(typeof(el) == 'object') {
			let folderPath = Object.keys(el)[0]
			fs.mkdirSync(path + '/' + folderPath)
			createPaths(el[folderPath], path + '/' + folderPath)
		}
	}

}
createPaths(map)



