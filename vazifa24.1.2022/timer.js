class Timer {

    start() {
        let interval = setInterval(() => {
            console.clear();
            let date = new Date();
            console.log(date.getFullYear() + ":" + `${date.getMonth() + 1} `+ ":" + date.getDate() + "     " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
        }, 1000)
        setTimeout(() => {
            clearInterval(interval)
        }, 5000)
    }

    notify(time, what) {
        let soat
        time = time.split(':')
        let vaqt = new Date()
        if (vaqt.getHours() <= time[0] && vaqt.getMinutes() <= time[1]) {
            let interval = setInterval(() => {
                let olma = new Date()
                if (olma.getHours() == time[0] && olma.getMinutes() == time[1]) {
                    console.clear()
                    clearInterval(interval)
                    console.log("==>", what);
                    return
                }
                console.clear()
                soat = olma.getFullYear() + ":" +` ${olma.getMonth() + 1}` + ":" + olma.getDate() + "     " + olma.getHours() + ':' + olma.getMinutes() + ':' + olma.getSeconds()
                console.log(`${soat} remaining ${olma.getMinutes()-time[1]} mins`)
            }, 1000);
        } else {
            throw new Error("O'tib ketgan vaqt kiritildi")
        }
    }

}

let timer = new Timer();
timer.notify("14:48", "hello world")