var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
/* 
toString() 返回数组元素
flat() 方法会按照一个可指定的深度递归遍历数组
*/
console.log([...new Set(arr.toString().split(',').sort((a, b)=>a-b).map(Number))]);
// console.log(Array.from(new Set(arr.flat(Infinity))).sort((a, b)=>{return a - b}));