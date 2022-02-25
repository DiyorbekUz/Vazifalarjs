const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let questions = ['Ismizni kiriting: ', 'Familyezni kiriting: ', 'Emailizni kiriting: ', 'Manzilizni kiriting: ', 'Yoshizni kiriting: ']
let result = []

function* ques(){
    for (let i = 0; i < questions.length; i++) {
        rl.question(yield questions[i], (qiymat) => {
            result.push(qiymat)
            console.log(question1.next().value)
        })
    }
}

var question1 = ques()
console.log(question1.next().value)