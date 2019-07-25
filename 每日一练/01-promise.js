function logTime (time) {
    return (new Date().getTime() - time)/1000 + 's';
}
const time = new Date().getTime();
const taskA = new Promise(resolve => {
    setTimeout(()=>{
        console.log('filled A', logTime(time));
        resolve('A');
    }, 1000);
})
const taskB = new Promise(resolve => {
    setTimeout(()=>{
        console.log('filled B', logTime(time));
        resolve('B');
    }, 3000);
})

Promise.all([taskA, taskB]).then((values) => {
    setTimeout(()=>{
        console.log('filled C', logTime(time));
    }, 1000);
})