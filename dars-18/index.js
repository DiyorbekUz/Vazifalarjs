let arr = ['Kompyuterni ochasiz', 'Yoqish tugmachasini bosasiz','Parolni terasiz', 'VsCode yoki bronta Kod yozuvchi dasturga kirasiz', 'fayl ochib kodni yozaverasiz']

function* step(){
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

let stepS = step()
h1.textContent = stepS.next().value

button.onclick = ()=>{
    let steplar = stepS.next().value
    if(steplar){
        h1.textContent = steplar
    }else{
        h1.textContent = 'Tamom'
    }
}