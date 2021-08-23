// Promise.all will reject as soon as one of the Promises in the array rejects.
// Promise.allSettled will never reject, it will resolve once all Promises in the array have either rejected or resolved.
  let promise1 = (val) => {
    return new Promise((res, rej) => {
      let value = 5 + val;
      res(value);
    })
  }
  let promise2 = (val) => {
    return new Promise((res, rej) => {
      rej('Error')
    })
  }
  Promise.all([promise1(5), promise2(2)]).then(a => {
    console.log(a)
  })



      // PROMISE.ALL WHEN USING LOOP, TO INSTANTIATE USE AWAIT
      let arr = [1, 4, 5, 10, 20]
      let value;
      let test = async function() {
        let map = await Promise.all(arr.map(x => {
          return Promise.all(
            arr.filter(y => {
              return x + y === 5
            })
          ).then(val => {
            // console.log(val)
            value = val
            return value;
          })
        }))
        console.log(map) //[Array(1), Array(1), Array(0), Array(0), Array(0)]
        let func1 = (val) => {
          return val + 2;
        }
        let func2 = (val) => {
          return val + 3;
        }
        let val = await Promise.all([func1(1), func2(1)])
        console.log(val) //[3, 4]
    }
    test()