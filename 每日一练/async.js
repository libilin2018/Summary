/* // promise
const fs = require("fs");
const read = function(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if (err) {
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
};
read('./static/1.txt').then(res=>{
    console.log(res.toString());
    return read('./static/2.txt');  // 返回新的数据，然后输出
}).then(res => {
    console.log(res.toString());
    return read('./static/3.txt');
}).then(res => {
    console.log(res.toString());
}); 

*/

/* // generator
const fs = require("fs");
const read = function(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if (err) {
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
};
function * show(){
    yield read('static/1.txt');
    yield read('static/2.txt');
    yield read('static/3.txt');
}
const s = show();
//  next()返回包含value和done属性的对象
s.next().value.then(res => {
    console.log(res.toString());
    return s.next().value;
}).then(res => {
    console.log(res.toString());
    return s.next().value;
}).then(res => {
    console.log(res.toString());
}); 
*/

// async
const fs = require("fs")
const read = function (fileName) {
    return new Promise ((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

async function readByAsync () {
    let a1 = await read('static/1.txt');
    let a2 = await read('static/2.txt');
    let a3 = await read('static/3.txt');
    console.log(a1.toString());
    console.log(a2.toString());
    console.log(a3.toString());
}

readByAsync()