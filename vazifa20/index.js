// function Flatter(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(Flatter(arr[i]));
//             console.log(arr[i]);
//         } else {
//             result.push(arr[i]);
//             console.log(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(Flatter([1,2,3,4,5,[2,3,4,5]]));




// function alotof(arr) {
//     let obj = {};
//     let son = 0
//     let globj = {}
//     for (let i of arr) {
//         obj[i] = obj[i] ? obj[i] + 1 : 1;
//     }
//     for (let j in obj) {
//         if (obj[j] > son) {
//             globj = {}
//             globj[j] = obj[j]
//             son = obj[j]
//         }
//     }
//     return globj
// }
// console.log(alotof([1,2,3,4,5,55,5,5,5,5,4,7]));