class RGB{
    constructor(R=0, G=0, B=0){
        if (this.validateColor(R)) {
            this.R = R
        }else{
            this.R = 0
        }

        if (this.validateColor(G)) {
            this.G = G
        }else{
            this.G = 0
        }

        if (this.validateColor(B)) {
            this.B = B
        }else{
            this.B = 0
        }
    }

    colorss(){
        return `RGB {R: ${this.R}, G: ${this.G}, B: ${this.B}}`
    }

    red(Red){
        if (this.validateColor(Red)) {
            this.R = Red
        }
    }

    green(Green){
        if (this.validateColor(Green)) {
            this.G = Green
        }
    }

    blue(Blue){
        if (this.validateColor(Blue)) {
            this.B = Blue
        }
    }

    validateColor(num){
        return num > 255 || num<0 ? false : true 
    }

    colors(colorss){
        let err = []
        for(let el in colorss){
            if (colorss[el] < 0 || colorss[el]>255) {
                err.push(el)
            }
        }

        if (err.length == 0) {
            this.R = colorss[0]
            this.G = colorss[1]
            this.B = colorss[2]
        }else{
            for (let i = 0; i < err.length; i++) {
                if (err[i] != 0) {
                    this.R = colorss[0]
                }
                if (err[i] != 1) {
                    this.G = colorss[1]
                }
                if (err[i] != 2) {
                    this.B = colorss[2]
                }

            }
        }
        return `RGB {R: ${this.R}, G: ${this.G}, B: ${this.B}}`
    }
}

let rgb = new RGB(256,23,43)
rgb.red(500)
console.log(rgb.colorss());
// console.log(rgb);