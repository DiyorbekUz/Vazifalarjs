let [,,arg] = process.argv
let fs = require('fs')
let balance = fs.readFileSync('./balance.json', 'UTF-8')
balance = JSON.parse(balance)
if(arg == '--more'){
    console.table([balance])
    return
}

if (!arg) {
    console.log("$"+balance.balance);
}