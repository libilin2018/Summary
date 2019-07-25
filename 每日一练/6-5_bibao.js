// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }
// console.log(i);

// IIFE 立刻执行函数表达式
// for (var i = 0; i < 5; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(j);
//         }, 1000)
//     }(i))
// }
// console.log(i);

// setTimeout第三个参数
// for (var i = 0; i < 5; i++) {
//     setTimeout(function(i) {
//         console.log(i);
//     }, 1000, i);
// }
// console.log(i);

// 0->1->2->3->4->5


// var result = function(i) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000 * i)
// }
// for (var i = 0; i < 5; i++) {
//     result(i);
// }
// setTimeout(function() {
//     console.log(i);
// }, 1000 * i);

// promise
const tasks = [];
var output = (i) => new Promise(resolve => {
    setTimeout(() => {
        console.log(i);
        resolve(i);
    }, 1000 * i)
});
for (let i = 0; i < 5; i++) {
    tasks.push(output(i));
}

Promise.all(tasks).then(res => {
    setTimeout(() => {
        console.log(res[res.length - 1] + 1);
    }, 1000)
})

/* // async/await
const sleep = timeoutMS => new Promise(resolve => {
    setTimeout(resolve, timeoutMS);
});
(async() => {
    for (var i = 0; i < 5; i++) {
        if (i > 0) {
            await sleep(1000);
        }
        console.log(i);
    }
    await sleep(1000);
    console.log(i);
})(); */