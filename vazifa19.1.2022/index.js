function filtered(users, validate){
    const keys = Object.keys(validate)

    const res = users.filter(user => {
      let obj = {}
      keys.forEach(key => {
        if(user[key]){
          obj = {...obj, [key]: user[key]}
        }
      })

      if(JSON.stringify(obj) === JSON.stringify(validate)){
        return user
      }
    })
    return res
  }


let users = [
    {name: "ali", job: "coder", age: 16, gender: 'male'},
    {name: "Abror", job: "coder", age: 12, gender: 'male'},
    {name: "Gulchapchap", job: "designer", age: 15, gender: 'female'},
    {name: "ali", job: "designer", age: 16, gender: 'male'}
]

console.log(filtered(users,{gender: 'male', age: 16, job: 'designer'}));