const { arr, processArray, count } = require('./config')

console.time('sync')
for (let i = 0; i < count; i++) {
  processArray(arr)
}
console.timeEnd('sync')
console.log('I was blocked :(')
