// let person = {
//     name: 'ali',
//     surname: 'nodirov'
// }

// Object.freeze(person);

// person.age = 12
// delete person.name
// console.log(person);


// let map = new Map([
//     [7, 'hello'],
//     ['name', 'salom']
// ])
// let obj = {}
// for(let [key, value] of map){
//     obj[key] = value
// }

// console.log(obj);

// let set = new Set('referee')
// console.log(set);
// console.log([...new Set("referee")].join(""));

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);


// loops
// function hasDuplicate(array) {
//     for (let i = 0; i < array.length-1; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if (array[i] == array[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(hasDuplicate([1,3,2,1]) );

// // In set

// const hasDuplicate2 = arr => new Set(arr).size !== arr.length
// console.log(hasDuplicate2([1,3,2,1]) );


// function isVowel(char){
//     return "aeiou".includes(char);
// }

// function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//       let lowerCaseChar = char.toLowerCase()
//       if(isVowel(lowerCaseChar)){
//         if(vowelMap.has(lowerCaseChar)){
//           vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//         } else {
//           vowelMap.set(lowerCaseChar, 1);
//         }
//       }
//     }
//     return vowelMap;
// }

// console.log(vowelCount('mexanizatsiyalashtirilmaganligidandurda'));


// let m = new WeakMap()
// const o1 = {},
//     o2 = function(){},
//     o3 = global,
//     o4 = [1, 2, 3];

// m.set(o1, 37);
// m.set(o2, 'azerty');
// console.log(m.get(o1));

