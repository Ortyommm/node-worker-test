const { Worker } = require('worker_threads')
const { count } = require('./config')


function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./my-worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

async function run(i) {
  const result = await runService(i)
  // console.log(result);
}


function createRuns() {
  const promiseArray = []
  for (let i = 0; i < count; i++) {
    promiseArray.push(run(i).catch(err => console.error(err)))
  }
  return promiseArray
}

console.time('all')
Promise.all(createRuns()).then(() => console.timeEnd('all'))
console.log('haha, I am not blocked')