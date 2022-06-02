const { workerData, parentPort } = require('worker_threads')
const { arr, processArray } = require('./config')

// Тут (в этом файле), можно выполнять тяжёлые вычисления, не блокируя главный поток. Можно сказать, асинхронно.

const index = workerData

console.time(`worker ${index}`)
const sortedArr = processArray(arr)
console.timeEnd(`worker ${index}`)

parentPort.postMessage({ sortedArr })