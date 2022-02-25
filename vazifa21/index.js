function func(array, target) {
    let elem1 = []
    let elem2 = []

    for (let k = 0, t = 0; k < array[t].length; k++) {
        if (array[t][0] != target[0]) {
            t++
        }
        if(array[t].length > target.length) break


        if (array[t][k] == target[k]) {
            elem1.push(array[t][k])
        }           
    }

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {

            if(array[i].length > target.length) break

            if (array[i][j] == target[j]) {
                elem2.push(array[i][j])
            }else{
                elem2.length = 0
                break
            }

        }
        if (elem1.length < elem2.length) {
            elem1 = elem2
        }else{

        }
    }
    return elem1.join('')
}

console.log(func(['googu','goo','g1o'],'google'));