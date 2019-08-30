function logTime (time) {
    return (new Date().getTime() - time)/1000 + 's';
}
const time = new Date().getTime();
const taskA = new Promise(resolve => {
    setTimeout(()=>{
        console.log('filled A', logTime(time));
        resolve('A');
    }, 3000);
})
const taskB = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('filled B', logTime(time));
        reject('B');
    }, 1000);
})

const taskC = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('filled C', logTime(time));
        resolve('C');
    }, 2000);
})

/* 
只要给定的迭代中的一个promise解决或拒绝，就采用第一个promise的值作为它的值，从而异步地解析或拒绝
*/
Promise._race = promises => new Promise((resolve, reject) => {
    promises.forEach(promise => {
        promise.then(resolve, reject)
    })
})

Promise._race([taskA, taskB, taskC]).then(value => {
    console.log(value)
}).catch(err => {
    console.log(err)
})

/* 
Promise.all 错误处理
  Promise.all()执行多个网络请求，如果有一个被拒绝就立刻调用，不会等待其他promise执行结束
1. 全部改为串行调用（失去Node并发优势）
2. 使用 try catch 处理异常，返回resolve
*/

function promiseAll(promises){
    return new Promise((resolve, reject) => {
        if (!promises[Symbol.iterator]) return reject(new TypeError(`${promises} is not iterable(cannot read property Symbol(Symbol.iterator))`))
        let countNum = 0;
        let promiseNum = promises.length;
        let resolvedArr = new Array(promiseNum)
        for (let i=0; i<promiseNum; i++) {
            Promise.resolve(promises[i]).then(value => {
                countNum++
                resolvedArr[i] = value
                if (countNum === promiseNum) {
                    resolve(resolvedArr)
                }
            }).catch(reason => {
                reject(reason)
            })
        }
    })
}
// promiseAll([taskA, taskB]).then(function(value){
//     console.log('resolve' + value)
// }).catch(value => {
//     console.log('reject' + value)
// })



