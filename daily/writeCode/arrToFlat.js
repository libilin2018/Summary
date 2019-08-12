
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
/* 
toString() 返回数组元素
flat() 方法会按照一个可指定的深度递归遍历数组
*/
console.log([...new Set(arr.toString().split(',').sort((a, b)=>a-b).map(Number))]);
// console.log(Array.from(new Set(arr.flat(Infinity))).sort((a, b)=>{return a - b}));

function flatten (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten(arr))


/* 
[2, 10, 3, 4, 5, 11, 10, 11, 20] => [[2, 3, 4, 5], [10, 11], [20]]
*/
function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + 1
}
let initArr = Array.from({length: 20}, () => randomInt(1, 100))
// 放入hash表
const obj = {}
for (let i of initArr) {
  let temp = Math.floor(i/10)
  if (!obj[temp]) obj[temp] = []
  obj[temp].push(i)
}
const resArr = []
for (let i in obj) {
  resArr.push(obj[i])
}
console.log(resArr)

