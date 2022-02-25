// const problems = [
// 	{ 
// 		definition: 'make a function sum that finds the sum of numbes',
// 		tests: [
// 			{
// 				test: [4, 4, 4],
// 				answer: 12
// 			},
// 			{
// 				test: [-8, 5, 1],
// 				answer: -2
// 			},
// 		]
// 	}
// ]



// heading.textContent = problems[0].definition

// btn.onclick = () => {
// 	let func = new Function('array', `
// 		${textArea.value}

// 		return sum(array)
// 	`)

// 	let res1 = func(problems[0].tests[0].test)
// 	let res2 = func(problems[0].tests[1].test)

// 	console.log(res1)
// 	console.log(res2)
// }



function sum(array, target){
    for(let el in array){
        for (let i = el; i < array.length; i++) {
			if(array[el] + array[i] == target){
				return [el, i]
			}
		}
    }

	return []
}

function palindrom(str) {
	str = str.trim()
	let newStr = ''
	for (let i = 0; i < str.length; i++) {
		if(str[i] == ' ') {
		}else{
			newStr+=str[i]
		}
	}
    var splitString = newStr.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
	return joinArray == newStr
}

function Compares(num1, num2){
	if(num1 > num2){
		return '>'
	} else if(num1 < num2){
		return '<'
	}else{
		return '='
	}
}
 
console.log(Compares(12,24));