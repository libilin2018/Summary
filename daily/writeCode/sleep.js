// let sleep = time => new Promise(resolve => setTimeout(resolve, time))

// sleep(1000).then(() => console.log(1))

// function* sleepGenerator (time) {
//   yield new Promise(resolve => {
//     setTimeout(resolve, time)
//   })
// }
// sleepGenerator(1000).next().value.then(() => console.log(2))

function sleep (callback, timeout) {
  if (typeof callback == 'function') {
    setTimeout(callback, timeout)
  }
}

function output () {
  console.log(3)
}

sleep(output, 1000)