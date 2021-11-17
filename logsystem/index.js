let array = [
    {
        id: 1,
        firstname: 'Diyorbek',
        lastname: 'Ermamatov',
        email: 'diyorbek@gmail.com',
        password: '1aaa6789',
        age: 16
    }
]


let userid = 2
function Reguser(firstname, lastname, email, password, age) {
    let count = 0
    for (let i = 0; i<email.length; i++) {
        if (email[i] === '@') {
            count++
        } 

    }
    if (count != 1) {
        return "Invalid email"
    }

    if (password.length < 8) {
        return "minimum characters of the password 8"
    }


    // if (phone.toString()[0] !== '9' || phone.toString()[1] !== '9' || phone.toString()[2] !== '8') {
    //     return "invalid phone"
    // }
    
    if (typeof age  === 'string'){
        return "invalid age type"
    }
    
    let User = {
    id: userid,
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    age: age
    } 
    array.push(User)
    userid++
    return array
}

function update(num, objc){
    let obb = ''
    let key = ''
    for(let i in objc){
        obb = objc[i]
        key = i
    }
    console.log(key, obb);
    
    for(let j=0; j<array.length; j++){
        for(let i in array[j]){
            if(array[j][i] === num){
                array[j][key] = obb
                console.log(array[j]);
            }
        }
    }

    }
    

function deleteuser(id) {
    var res = array.filter((item) => item.id !== id);
    // array.length = 0
    array.push(res)
    return res
}

function allusers() {
    console.log(array);
}


Reguser('Abror','Alisherov','abror@gmail.com','sfdkm5dsvd',16);

update(2,{firstname:'Di'})


// function searchUsers(shoott) {
//     const result = array.filter(shoot => shoot.id == shoott);
//     if(result){
//         return result;
//     }else{
//         return "Bundey user yoq"
//     }
// }

// console.log(searchUsers(1));