let [,,arg, sum] = process.argv
let fs = require('fs')
let balance = fs.readFileSync('./balance.json', 'UTF-8')
balance = JSON.parse(balance)
balance.incoming +=+sum
balance.balance +=+sum
fs.writeFileSync('./balance.json', JSON.stringify(balance))