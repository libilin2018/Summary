var arr1 = Array.from(new Array(100000), (x, index) => {
	return index;
});

var arr2 = Array.from(new Array(50000), (x, index) => {
	return index + index;
})

function removal () {

}

var start = new Date().getTime();
console.log('开始去重');

console.log('剩余长度', removal6(arr1, arr2).length);
var end = new Date().getTime();
console.log('耗时', end - start, 'ms');

// 双重for循环去重
// function removal1(a, b) {
// 	var arr = a.concat(b);
//     for (var i=0, len=arr.length; i<len; i++) {
//         for (var j=i+1; j<len; j++) {
//             if (arr[i] == arr[j]) {
//                 arr.splice(j, 1);
//                 // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
//                 len--;
//                 j--;
//             }
//         }
//     }
//     return arr;
// }
// // Array.filter() + indexOf 
// function removal2(a, b) {
// 	var arr = a.concat(b);
// 	return arr.filter((item, index) => {
// 		return arr.indexOf(item) == index;
// 	})
// }

// // Array.sort()
// function removal3(a, b) {
// 	var arr = a.concat(b);
// 	arr.sort();
// 	var newArr = [arr[0]];
// 	for (var i=1; i<arr.length; i++) {
// 		arr[i] !== arr[i-1] && newArr.push(arr[i]);
// 	}
// 	return newArr;
// }

// // for...of  +  Array.includes()
// function removal4(a, b) {
// 	let arr = a.concat(b);
// 	let newArr = [];
// 	for (let i of arr) {
// 		!arr.includes(i) && newArr.push(arr[i]);
// 	}
// 	return newArr;
// }

// // new Set(); Set类似数组结构，成员具有唯一性
// function removal5(a, b) {
// 	// return Array.from(new Set([...a, ...b]));
// 	return [...new Set([...a, ...b])];
// }

function removal6(a, b) {
	let arr = a.concat(b);
	let object = {};
	let newArr = [];
	for (let i of arr) {
		if (!object[i]) {
			newArr.push(arr[i]);
			object[i] = 1;
		}
	}
	return newArr;
 }