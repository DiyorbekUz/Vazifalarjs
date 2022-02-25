let solutions = [
    {
        solutionId: 1,
        solutionTheme: "1. Two sum",
        Solution: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.`,
        Example1: `<span>Input:</span> <code>nums = [2,7,11,15], target = 9  </code> <br>
        <span>Output:</span> <code>[0,1] </code> <br>
        <span>Explanation:</span> <code>Because nums[0] + nums[1] == 9, we return [0, 1]. </code>`,
        Example2: `
            <span>Input:</span>  <code> nums = [2,7,11,15], target = 17 </code> <br>
            <span>Output:</span>  <code> [] </code> <br>
            <span>Explanation:</span>  <code> because there are no numbers in the array equal to the second argument </code>
        `
    },
    {
        solutionId: 2,
        solutionTheme: "2. Palindrome",
        Solution: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.`,
        Example1: `<b>Input:</b>  <code> str = "kiyik" </code> <br>
        <span> <b>Output: </b></span>  <code> true </code> <br>
        <span><b> Explanation: </b></span>  <code> Because "kiyik" is a palindrome. </code>`,
        Example2: `
            <span><b> Input: </b></span>  <code> str = "race a car" </code> <br>
            <span><b> Output: </b></span>  <code> false </code> <br>
            <span><b> Explanation: </b></span>  <code> Because "raceacar" is not a palindrome </code>
        `
    },
    {
        solutionId: 3,
        solutionTheme: "3. Compares two number",
        Solution: `Create a function that compares two numbers!`,
        Example1: `<span><b> Input: </b></span>  <code> compares(12, 23) </code> <br>
        <span><b> Output: </b></span> <code>  < </code> <br>
        <span><b> Explanation </b>:</span> <code>  because the number 12 is smaller than the number 23 </code>
        `,
        Example2: `
            <span><b> Input </b>:</span>  <code> compares(24, 16) </code> <br> 
            <span><b> Output: </b></span>  <code> > </code> <br>
            <span><b> Explanation:  </b></span> <code> because the number 24 is greater than the number 16 </code>
        `,
        Example3: `
        <span><b> Input: </b></span>  <code> compares(67, 67) </code> <br>
        <span><b> Output: </b></span>  <code> = </code> <br>
        <span><b> Explanation:  </b></span>  <code> because the number 67 and the number 67 are equal </code>
    `
    }
]


let solut1 = () =>{
    try{
        let func = new Function('array', 'target', `
        ${textarea.value}
        return sum(array, target)
        `)

        let nums = leetcode.solutionNum
        let answers = leetcode.answers
        for (let i = 0; i < problems[nums-1].tests.length; i++) {
            let ans = func(problems[nums-1].tests[i].test, problems[nums-1].tests[i].target)
            if (String(ans) == String(problems[nums-1].tests[i].answer)) {
                answers.innerHTML +=
                `
                    <ul>
                        <li>${i+1}. <span class="status">Success <i class="fas fa-check"></i></span></li>
                    </ul>
                `
                }else{
                    answers.innerHTML +=
                `
                    <ul>
                    <li>${i+1}. <span class="status">Fail <i class="fas fa-times"></i></span></li>
                    </ul>
                `
            }
        }
    }catch(error){
        alert(error.message + "\n\nThe function name must be declared as sum()")
    }
}

let solut2 = () =>{
    try{
        let func = new Function('text', `
        ${textarea.value}
        return palindrom(text)
        `)

        let nums = leetcode.solutionNum
        let answers = leetcode.answers
        for (let i = 0; i < problems[nums-1].tests.length; i++) {
            let ans = func(problems[nums-1].tests[i].test)
            if (ans == problems[nums-1].tests[i].answer) {
                answers.innerHTML +=
                `
                    <ul>
                        <li>${i+1}. <span class="status">Success <i class="fas fa-check"></i></span></li>
                    </ul>
                `
                }else{
                    answers.innerHTML +=
                `
                    <ul>
                    <li>${i+1}. <span class="status">Fail <i class="fas fa-times"></i></span></li>
                    </ul>
                `
            }
        
        }
    }catch(error){
        alert(error.message + "The function name must be declared as palindrom()")
    }
}

let solut3 = () =>{
    try{
        let func = new Function('num1', 'num2', `
        ${textarea.value}
        return Compares(num1, num2)
    `)

    let nums = leetcode.solutionNum
    let answers = leetcode.answers
        for (let i = 0; i < problems[nums-1].tests.length; i++) {
            let ans = func(problems[nums-1].tests[i].num1, problems[nums-1].tests[i].num2)
            if (ans == problems[nums-1].tests[i].answer) {
                answers.innerHTML +=
                `
                    <ul>
                        <li>${i+1}. <span class="status">Success <i class="fas fa-check"></i></span></li>
                    </ul>
                `
                }else{
                    answers.innerHTML +=
                `
                    <ul>
                    <li>${i+1}. <span class="status">Fail <i class="fas fa-times"></i></span></li>
                    </ul>
                `
            }
        
        }
    }catch(error){
        alert(error.message + "\n\nThe function name must be declared as Compares()")
    }
}