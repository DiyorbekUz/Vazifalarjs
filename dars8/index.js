 let ul = document.querySelector('ul');
 let li = document.querySelector('.middle')
//  console.log(ul.childNodes);
//  console.log(ul.children);
//  console.log(ul.lastElementChild);
//  console.log(ul.lastChild);
// console.log(li.nextElementSibling);
// console.log(li.previousElementSibling);

HTMLElement.prototype.allSiblings = function (){
    let res = []
    let next = this.nextElementSibling
    let before = this.previousElementSibling
    res.push(this)

    while(next){
        res.push(next)
        next = next.nextElementSibling
    }

    while(before){
        res.push(before)
        before = before.previousElementSibling
    }

    return res
}

// console.log(li.allSiblings());

let newLi = document.createElement('li')
newLi.textContent = 'yangi element'

ul.insertBefore(newLi, li)

ul.replaceChild(newLi, li)