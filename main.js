let userid = 0
function idgenerate(id) {
    let arrid = []
    for (let i = 0; i < id; i++) {
        userid++
        arrid.push(userid) 
    } 
    
    console.log(arrid); 
    usergenerate(id)
}

let userid1 = 0
function usergenerate(id) {

    let arruser = []
    for (let i = 0; i < id; i++) {
        userid1++
        arruser.push(`user${userid1}`)
    }
    
    console.log(arruser); 
    emailgen(id)
}

let usergm = 0
function emailgen(id) {
    let arremail = []
    for (let i = 0; i < id; i++) {
        usergm++
        arremail.push(`user${usergm}@gmail.com`)
    }
    
    console.log(arremail); 
    passwordgen(id)
}

let userpass = 0
function passwordgen(id) {
    let arrpass = []
    let pass = Date.now()
    for (let i = 0; i < id; i++) {
        userpass++
        arrpass.push(`${userpass}${pass}`)
        
    }
    console.log(arrpass); 
}

idgenerate(10);