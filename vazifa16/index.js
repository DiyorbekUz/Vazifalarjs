let ordier={
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
    l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
} 


let keyss = Object.keys(ordier)
function func(mess, num) {
    let nums = []
    for (let i = 0; i < mess.length; i++) {
        for (let j = 0; j < keyss.length; j++) {
            if (mess[i] == keyss[j]) {
                nums.push(ordier[`${keyss[j]}`])
            }            
        }     
    }

    let numArray = []
    num = Array.from(String(num), Number);

    for (let l = 0; l < nums.length; l+=numArray.length) {
        numArray.push(...num)        
    }
    numArray.length = nums.length
    let sum = []
    for(let k = 0; k < nums.length; k++){
        sum.push(nums[k] + numArray[k])
    }

    return sum
}

console.log(func('scout',1939));