// sleep函数
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    });
}

(async function() {
    console.log(new Date());
    // await表达式导致async函数执行暂停，直到Promise决议
    await sleep(3000);
    console.log(new Date());
})();

// (function() {
//     console.log(new Date());
//     sleep(3000).then(() => {
//         console.log('sleep');
//     })
//     console.log(name);
//     console.log(new Date());
// })();