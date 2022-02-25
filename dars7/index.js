class Char extends String{
    constructor(string){
        if (string.length > 1 || typeof string == 'number') {
            throw new TypeError("Char only includes one character")
        }
        super(string)
    }
}

let char = new Char()
console.log(char);