let finalObj = {};
arr.map(item => {
    let value;
    Promise.all(
    value = arr.filter(x => {
        return x * item === 20
    })
    ).then(data => {
        if (value[0]) {
          console.log(value)
          finalObj = {...finalObj, [value[0]]: item}
        }
    })
})

let arr = [1,4,5,-2,10, -2]
let dict = {}
arr.map(x => {
    dict = {...dict, [x]: null}
})
arr.map(x => {
    let answer = 20/x;
    if (dict[answer] === null) {
        dict[answer] = x;
    }
})