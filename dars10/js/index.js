let usersList = document.querySelector('.all-users')
let currentDate = document.querySelector('#dates-range').value = new Date().getDate() + "/" + new Date().getMonth() +1 + "/" + new Date().getFullYear()
let globalFilter = 'all'
let fullname = document.querySelector('#fullname')
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let about = document.querySelector('#about')
let changePassword = document.querySelector('#changePassword')
let newPassword = document.querySelector('#newPassword')
let confirmPassword = document.querySelector('#confirmPassword')
let SaveChange = document.querySelector('.btn-primary')
var GetUsers = JSON.parse(window.localStorage.getItem('users'))
let users_id = idGenerator()
let users = GetUsers ? GetUsers : []
let forid = 0



function addUsers(elem) {
    elem = new Set(elem)
    elem = [...elem]
    // console.log(elem);
   for (let i = 0; i < elem.length; i++) {
    usersList.innerHTML += `
    <tr class="users-list">
        <td class="align-middle">
        <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
            <input type="checkbox" class="custom-control-input checkboxx inputt" id="item-${++forid}">
            <label class="custom-control-label checkboxx" for="item-${forid}"></label>
        </div>
        </td>
        <td class="align-middle text-center">
        <div class="bg-light d-inline-flex justify-content-center align-items-center align-top" style="width: 35px; height: 35px; border-radius: 3px;"><i class="fa fa-fw fa-photo" style="opacity: 0.8;"></i></div>
        </td>
        <td class="text-nowrap align-middle filter-name">${elem[i].fullname}</td>
        <td class="text-nowrap align-middle"><span>${elem[i].date}</span></td>
        <td class="text-center align-middle"><i id="ActiveButton" class="fa fa-fw text-secondary cursor-pointer fa-toggle-off"></i></td>
        <td class="text-center align-middle">
        <div class="btn-group align-top">
            <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
            <button class="btn btn-sm btn-outline-secondary badge" type="button"><i class="fa fa-trash"></i></button>
        </div>
        </td> 
    </tr>
`
   }

   
   forid++
   Filters()
   checkBox()
   AvticeButton()
   allChecked()
        
}

function Filters() {
    let actives = 0
    let select = 0
   for (let j = 0; j < GetUsers.length; j++) {
       if (GetUsers[j].active == true) {
           actives++
       }
   }
   for (let j = 0; j < GetUsers.length; j++) {
    if (GetUsers[j].selected == true) {
        select++
    }
}
    filters.innerHTML=`
   <li class="nav-item"><a href="" class="nav-link filter-all"><span>All</span>&nbsp;<small>/&nbsp;${GetUsers.length}</small></a></li>
   <li class="nav-item"><a href="" class="nav-link filter-Active"><span>Active</span>&nbsp;<small>/&nbsp;${actives}</small></a></li>
   <li class="nav-item"><a href="" class="nav-link filter-selected"><span>Selected</span>&nbsp;<small>/&nbsp;${select}</small></a></li> 
   `
}


SaveChange.onclick = function(e){
    if (fullname.value.trim().length < 5 || username.value.trim().length < 5 || email.value.trim().length < 5 || about.value.trim().length < 5 || changePassword.value.trim().length < 5 || confirmPassword.value.trim().length < 5 || newPassword.value.trim().length < 5 || newPassword.value != confirmPassword.value){
        alert('Kiritilgan ma\'lumotlar xato')
    }else{

        users.push(
            {
                user_id: users_id, fullname: fullname.value, username: username.value, email: email.value, about: about.value, password: newPassword.value, active: false, date: currentDate, selected: false
            }
        )
        
        users_id++
        window.localStorage.setItem('users', JSON.stringify(users))
        addUsers(users)     
    }
    window.location = location.href;
    
}
addUsers(users)


function checkOrUncheck($event) {
    return $event.srcElement.checked
}




function checkBox(){
    var checkbockses = document.querySelectorAll(".inputt");
checkbockses.forEach((element, index)=>{
    element.onchange = (e) =>{
        if(checkOrUncheck(e)){
        console.log(index);
        checkbockses[index].checked = true;
        users[index] = 
            {
                user_id: GetUsers[index].user_id, fullname: GetUsers[index].fullname, username: GetUsers[index].username, email: GetUsers[index].email, about: GetUsers[index].about, password: GetUsers[index].password, active: GetUsers[index].active, date: GetUsers[index].date, selected: true
            }
        
        window.localStorage.setItem('users', JSON.stringify(users))
        window.location = location.href;

        }else{
            console.log(index);

            users[index] = 
                {
                    user_id: GetUsers[index].user_id, fullname: GetUsers[index].fullname, username: GetUsers[index].username, email: GetUsers[index].email, about: GetUsers[index].about, password: GetUsers[index].password, active: GetUsers[index].active, date: GetUsers[index].date, selected: false
                }
            
            window.localStorage.setItem('users', JSON.stringify(users))
            window.location = location.href;

        }
        element.addEventListener("change",()=>{
            window.localStorage.setItem('users', JSON.stringify(users))
        })
    
    }
})

}

function allChecked() {
    checkbockses = document.querySelectorAll(".inputt");
    var elements = document.querySelectorAll("#ActiveButton");
    for (let i = 0; i < GetUsers.length; i++) {
        if (GetUsers[i].selected == true) {
            console.log(checkbockses[i]);
            checkbockses[i].checked = true;
        }

        if (GetUsers[i].active == true) {
            console.log(GetUsers[i].active);
            elements[i].classList.toggle("fa-toggle-on")
        }
    }
}


function AvticeButton() {
    var elements = document.querySelectorAll("#ActiveButton");
    elements.forEach((element, index) => {
        element.onclick = (e) => {  
            e.preventDefault()
            element.classList.toggle("fa-toggle-on")
            if(element.classList.contains('fa-toggle-on')){
                users[index] = 
                    {
                        user_id: GetUsers[index].user_id, fullname: GetUsers[index].fullname, username: GetUsers[index].username, email: GetUsers[index].email, about: GetUsers[index].about, password: GetUsers[index].password, active: true, date: GetUsers[index].date, selected: GetUsers[index].selected
                    }
                
                window.localStorage.setItem('users', JSON.stringify(users))
                window.location = location.href;
            }else{
                users[index] = 
                    {
                        user_id: GetUsers[index].user_id, fullname: GetUsers[index].fullname, username: GetUsers[index].username, email: GetUsers[index].email, about: GetUsers[index].about, password: GetUsers[index].password, active: false, date: GetUsers[index].date, selected: GetUsers[index].selected
                    }
                
                    window.location = location.href;
                window.localStorage.setItem('users', JSON.stringify(users))
            }
        }
    })

}

// for(let nav of navs) {
// 	nav.onclick = (e) => {  
//         e.preventDefault()
// 		navs.forEach(el => el.classList.remove('active'))
// 		nav.classList.add('active')
// 		globalFilter = e.target.textContent
// 	}
// }


let All = document.querySelector('.filter-all')
let Active = document.querySelector('.filter-Active')
let Select = document.querySelector('.filter-selected')

Active.onclick = ($event)=>{
    usersList.innerHTML = ''
    GetUsers.forEach((el, i)=> {
        if (el.active == true) {
            usersList.innerHTML += `
            <tr class="users-list">
                <td class="align-middle">
                <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                    <input type="checkbox" class="custom-control-input checkboxx inputt" id="item-${++forid}">
                    <label class="custom-control-label checkboxx" for="item-${forid}"></label>
                </div>
                </td>
                <td class="align-middle text-center">
                <div class="bg-light d-inline-flex justify-content-center align-items-center align-top" style="width: 35px; height: 35px; border-radius: 3px;"><i class="fa fa-fw fa-photo" style="opacity: 0.8;"></i></div>
                </td>
                <td class="text-nowrap align-middle filter-name">${GetUsers[i].fullname}</td>
                <td class="text-nowrap align-middle"><span>${GetUsers[i].date}</span></td>
                <td class="text-center align-middle"><i id="ActiveButton" class="fa fa-fw text-secondary cursor-pointer fa-toggle-off"></i></td>
                <td class="text-center align-middle">
                <div class="btn-group align-top">
                    <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
                    <button class="btn btn-sm btn-outline-secondary badge" type="button"><i class="fa fa-trash"></i></button>
                </div>
                </td> 
            </tr>
        `
               
        }
    });
    $event.preventDefault()
    Filters()
   checkBox()
   AvticeButton()
   allChecked()

}

All.onclick = ()=>{
    window.location = location.href="#";
}

Select.onclick = ($event)=>{
    usersList.innerHTML = ''
    GetUsers.forEach((el)=> {
        if (el.selected == true) {
            usersList.innerHTML += `
            <tr class="users-list">
                <td class="align-middle">
                <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                    <input type="checkbox" class="custom-control-input checkboxx inputt" id="item-${++forid}">
                    <label class="custom-control-label checkboxx" for="item-${forid}"></label>
                </div>
                </td>
                <td class="align-middle text-center">
                <div class="bg-light d-inline-flex justify-content-center align-items-center align-top" style="width: 35px; height: 35px; border-radius: 3px;"><i class="fa fa-fw fa-photo" style="opacity: 0.8;"></i></div>
                </td>
                <td class="text-nowrap align-middle filter-name">${el.fullname}</td>
                <td class="text-nowrap align-middle"><span>${el.date}</span></td>
                <td class="text-center align-middle"><i id="ActiveButton" class="fa fa-fw text-secondary cursor-pointer fa-toggle-${el.active ? 'on' : 'off'}"></i></td>
                <td class="text-center align-middle">
                <div class="btn-group align-top">
                    <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
                    <button class="btn btn-sm btn-outline-secondary badge" type="button"><i class="fa fa-trash"></i></button>
                </div>
                </td> 
            </tr>
        `     
        }
    });
    $event.preventDefault()
    Filters()
    checkBox()
    AvticeButton()
    allChecked()
}


function idGenerator () {
	return +(Date.now() + '').slice(-5)
}




