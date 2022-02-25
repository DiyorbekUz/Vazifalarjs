// let arr = [ 1,2,32,3,4,54,5,6,67,7,8,]
// Array.prototype.myFilter = function(callback){
//     let res_arr = []
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             res_arr.push(this[i])
//         }
//     }
//     return res_arr
// }
// console.log(arr.myFilter((val) => val < 2));

// let array = [1,23,4,5,2,5,6,6,4,3,9]

// Array.prototype.MySort = function(){
//     for (let i = 0; i < this.length; i++) {
//         for (let j = i+1; j < this.length; j++) {
//             if (this[i] > this[j]) {
//                 let a = this[i]  // 23
//                 this[i] = this[j] //4
//                 this[j] = a // 23
//             }           
//         }
        
//     }
//     return this
// }

// console.log(array.MySort());

// function BubleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let a = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = a
//             }           
//         }
        
//     }

//     return arr
// }
// let arr = [2,6,3,87,4,90]
// console.log(BubleSort(arr));