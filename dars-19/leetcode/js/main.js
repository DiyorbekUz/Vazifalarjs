class Leetcode{
    solutionTheme = document.querySelector('.condition-header')
    solutionDesc = document.querySelector('.condition-description')
    solutionStdio = document.querySelector('.stdio')
    solutionNum = window.localStorage.getItem('solutionNum') || 1
    answers = document.querySelector('.right-side-status')
    

    getCurrentSolution (){
        return window.localStorage.getItem('solutionNum')
    }

    changeSolution(value){
        let solut = solutions
        for (let i = 0; i < solut.length; i++) {
            if (value == solut[i].solutionId) {
                this.solutionTheme.textContent = `
                    ${solut[i].solutionTheme}
                `
                this.solutionDesc.textContent = solut[i].Solution
                this.solutionStdio.innerHTML = `
                <ul>

                <li>
                    <div class="stdio-header">
                        Example 1:
                    </div>
                    <div class="stdio-content">
                        ${solut[i].Example1}
                    </div>
                </li>

                <li>
                    <div class="stdio-header">
                        Example 2:
                    </div>
                    <div class="stdio-content">
                    ${solut[i].Example2}
                    </div>
                </li>

                ${value == 3 ? `<li>
                <div class="stdio-header">
                    Example 3:
                </div>
                <div class="stdio-content">
                ${solut[i].Example3}
                </div>
                </li>` : ''
                }

            </ul>
                `
            }
        }
        this.solutionNum = value
        window.localStorage.setItem('solutionNum', (value))
    }

    checkSolution(event){
        this.answers.innerHTML = null
        event.preventDefault();
        if (this.solutionNum == 1) {
            solut1()
        }else if(this.solutionNum == 2){
            solut2()
        }else {
            solut3()
        }
    }
}

let leetcode = new Leetcode()
leetcode.changeSolution(leetcode.solutionNum)

problem.onchange = function (){
    textarea.value = null
    leetcode.answers.innerHTML = null
    leetcode.changeSolution(this.value)
    window.localStorage.setItem('solution', this.value)
}

document.addEventListener('DOMContentLoaded', function () {
    if ( window.localStorage.getItem('solution')) {
        problem.value = window.localStorage.getItem('solution'); 
    }
});


btn.onclick = (event) => {
    leetcode.checkSolution(event)
}