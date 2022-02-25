let display = document.querySelector('input')	
document.querySelector('#btn').onclick = function(){
	let text = document.querySelector('.form input').value.trim()
	if (text.length == 0) {
		alert('Please Enter a task')
		display.value = ""
	}else{
		let li = document.createElement('li')
		let button = document.createElement('button')
		let span = document.createElement('span')
		button.textContent = 'X'
		li.append(span, button)
		span.textContent = display.value
		document.querySelector("ul").prepend(li)
		display.value = ""
		button.onclick = () => {
			li.remove()
		}
	}
}

