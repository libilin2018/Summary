Promise.prototype.finally = function (callback) {
  let p = this.constructor;
  console.log(p)
  return this.then(
    value => p.resolve(callback()).then(() => value),
    reason => p.resolve(callback()).then(() => {throw reason})
  )
}

const promise = Promise.resolve(1).finally(()=>{})
console.log(promise)