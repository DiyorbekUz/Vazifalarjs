let username = document.querySelector('.username')
let age = document.querySelector('.age')
let button = document.querySelector('button')
let users = []
button.onclick = () =>{
    let obj = {'username': username.value, 'age': age.value}
    users.push(obj)
    window.localStorage.setItem('data', JSON.stringify(users))
}