/*
	Callback
	Promise APIs
		* all
		* allSettled
		* race
		* any
		* resolve
		* reject
*/


function upperWithPromise (word) {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve(word.toUpperCase())
		},2000 )
	} )
}

function upperWithCallback (word, callback) {
	setTimeout(() => {
		callback(word.toUpperCase())
	}, 2000)
}

// upperWithPromise('hello').then(d => console.log(d))
// upperWithCallback('salom', (d) => console.log(d))
// btn.addEventListener('click')


// function square (num, callback) {
// 	if(!(typeof(num) == 'number')) {
// 		return callback(null, new Error("Wrong data type!"))
// 	}
// 	callback(num * num)
// }

// square(10, (data, error) => {
// 	if(error) {
// 		console.error(error)
// 	} else {
// 		console.log(data) // 100
// 	}
// })

console.log('salom')

let vada1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		return reject(new Error("invalid data!"))
	}, 4000)
})

let vada2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		return resolve(20)
	}, 3000)
})

let vada3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		return resolve(30)
	}, 2000)
})

// vada1.then(num => console.log(num))
// vada2.then(num => console.log(num))
// vada3.then(num => console.log(num))

// const vadalarAll = Promise.all([
// 	vada1,
// 	vada2,
// 	vada3
// ])

// vadalarAll
// 	.then((data) => console.log(data))
// 	.catch(error => console.log(error))


// const vadalarAllSettled = Promise.allSettled([
// 	vada1,
// 	vada2,
// 	vada3
// ])

// vadalarAllSettled
// 	.then((data) => console.log(data))
// 	.catch(error => console.log(error))



// const vadalarRace = Promise.race([
// 	vada1,
// 	vada2,
// 	vada3
// ])

// vadalarRace
// 	.then((data) => console.log(data))
// 	.catch(error => console.log(error))



// const vadalarAny = Promise.any([
// 	vada1,
// 	vada2,
// 	vada3
// ])

// vadalarAny
// 	.then((data) => console.log(data))
// 	.catch(error => console.log(error))

// console.log('hello')

