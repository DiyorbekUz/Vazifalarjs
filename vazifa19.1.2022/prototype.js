// unshift

// Array.prototype.myUnshift = function(...element) {return [...element, ...this]}

// let array = [1,2,3,4]
// console.log(array.myUnshift(12, 2));


// Array.prototype.myUnshift = function(...element) {
//     let reverseArray = []
//     for (let i = this.length-1; i >= 0; i--) {
//         reverseArray.push(this[i])
//     }

//     reverseArray.push(element)
//     let res = []
//     for (let j = reverseArray.length-1; j >= 0; j--) {
//         res.push(reverseArray[j])
//     }

//     return [...res]
// }

// let array = [1,2,3,4]
// console.log(array.myUnshift(12, 2));

// Map
// Array.prototype.myMap = function(callback, thisArg) {
//     console.log(thisArg);
//     let newArray = [];
//     let x = this.length;
//     for(let i=0; i<x; i++){
//       let counter = callback.call(thisArg, this[i], i, this);
//       newArray.push(counter);
//     }
//     return newArray;
// };
  
//   const arr = [1, 2, 3];
  
//   console.log(arr.myMap((a) => a * 2))



// shift
// Array.prototype.myShift = function(index){
//     let res = []
//     if (index == undefined) {
//         for (let i = 1; i < this.length; i++) {
//             res.push(this[i])            
//         }
//     }else{
//         for (let j = 0; j < this.length; j++) {
//             if (j == index) {
//                 continue
//             }
//             res.push(this[j])
//         }
//     }
//     return res
// }

// let array = [1,2,3,3,4]
// console.log(array.myShift());


// pop

// Array.prototype.myPop = function () {return this.length = this[this.length-1]}

// let array = [1,2,3,3,4]
// console.log(array.myPop());

// slice

// Array.prototype.mySlice = function (...index) {
//     let index1 = index[0]
//     let index2 = index[1]
//     if (index1 < 0) {
//         index1 = Math.abs(index1)
//         index1 = this.length - index1
//     }
//     if (index2 < 0) {
//         index2 = Math.abs(index2)
//         index2 = this.length - index2
//     }
//     let res = []

//     if (index.length == 2) {
//         for (let i = index1; i < index2; i++) {
//             res.push(this[i])
//         }
//     }else{
//         for (let i = index1; i < this.length; i++) {
//             res.push(this[i])
//         }
//     }
//     return res
    
// }
//         //  -5 -4 -3 -2 -1    
// let array = [1, 2, 3, 3, 4]
//         //   0, 1, 2, 3, 4
// console.log(array.mySlice(-4));


// trim 

// String.prototype.myTrim = function () {
//     return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
// }

// let str = '     dfd    '
// console.log(str.myTrim());

// split

// String.prototype.mySplit = function (...argument) {
//     let currentStr = ''
//     let res = []

//     for (let i = 0; i < this.length; i++) {
//         if (this[i] != argument[0]) {
//             currentStr+=this[i]
//         }else{
//             res.push(currentStr)
//             currentStr = ''
//         }
//     }
//     res.push(currentStr)
//     let arr = []
   
//     if (argument.length == 2) {
//         for (let j = 0; j < argument[1]; j++) {
//             arr.push(res[j])
//         }
//         return arr
//     }
//     return res
// }

// console.log('salom,dunyo,nma,gap'.mySplit(',', 2));