const { arr, processArray, count } = require('./config')

function createRuns() {
  const promiseArray = []
  for (let i = 0; i < count; i++) {
    promiseArray.push(new Promise((resolve, reject) => {
      const sortedArray = processArray(arr)
      return resolve(sortedArray)
    }))
  }
  return promiseArray
}


console.time('all')
setImmediate(() => Promise.all(createRuns(6)).then(() => console.timeEnd('all')))
console.log('haha, I am not blocked')
setTimeout(() => console.log('1s passed'), 1000)


// console.time('all')
// Promise.all(createRuns()).then(() => console.timeEnd('all'))
// console.log('I was blocked :(')
