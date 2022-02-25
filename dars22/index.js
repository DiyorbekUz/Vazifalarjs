let fs = require('fs')
let data = [
    {
        src: [
            {
                lib: ["postgres.js", "jwt.js", {x: ['g.txt']}],
            },
            {
                controllers: ["user.js"],
            },
            {
                routes: ["user.js"],
            },
            "server.js",
            "context.js"
        ]
    },
    "config.js"
]



function generator(files, path = "./") {
    for(let file in files){
        if(typeof files[file] == "object"){
            for(let i in files[file]){
                fs.mkdirSync(`${path}/` + i, {recursive: true, force: true})
                generator(files[file][i], `${path}/${i}`)
            }          
        }
        if(typeof files[file] == "string"){
            fs.writeFile(`${path}/` + files[file], "", (err) => console.log())
        }
    }
}

generator(data)