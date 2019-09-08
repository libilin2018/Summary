// let arr = [], set = new Set(), n=1000000;
// for (let i=0; i<n; i++) {
//   arr.push(i);
//   set.add(i);
// }
// //查找
// console.time('Array')
// arr.indexOf(123456)
// console.timeEnd('Array')
// console.time('Set')
// set.has(123456)
// console.timeEnd('Set')
const findIds = (arr, val) => {
  let searchValues = new Map(),
      searchValue;
  searchValues.set(val - arr[0], 0)
  for (let i=1, length=arr.length; i<length; i++) {
    searchValue = val - arr[i];
    if (searchValues.has(arr[i])) {
      searchValues.keys((item, index) => {
        console.log(item)
        if (item == arr[i]) {
          return index;
        }
      })
    } else {
      searchValues.set(searchValue, i)
    }
  }
  return false
}

console.log(findIds([1, 2, 3, 4], 6));