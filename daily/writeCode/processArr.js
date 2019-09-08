/* 
找出对称数
let arr1 = [...Array(10000).keys()].filter(item => {
  return item.toString().length > 1 && item === Number(item.toString().split('').reverse().join(''))
})
console.log(arr1)
*/

/* 
移动零
*/
let arr2 = [...Array(10000).keys()]
function moveZero1 (arr) {
  let num = 0;
	for (let i of arr) {
		if (i === 0) num++
	}
	return (arr.join('').replace(/[0]/g, '') + '0'.repeat(num)).split('').map(Number)
}

function moveZero2 (arr) {
  const length = arr.length;
  let j = 0;
  for (let i=0; i<length-j; j++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--;
      j++;
    }
  }
  return arr
}
console.time('1')
moveZero1(arr2)
console.timeEnd('1')
console.time('2')
moveZero2(arr2)
console.timeEnd('2')