/* 
交集
*/
// me
function intersection (arr1, arr2) {
  let arr = []
  for (let i=0,len=arr1.length; i<len; i++) {
    const index = arr2.indexOf(arr1[i])
    if (index > -1) {
      arr.push(arr1[i])
      arr2.splice(index, 1)
    }
  }
  return arr
}
// others
function intersect (arr1, arr2) {
  const map = {}, res = []
  for (let n of arr1) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }
  for (let n of arr2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    }
  }
  return res
}
let arr1 = [1,2,2,3], arr2 = [2,2]
console.log(intersect(arr1, arr2))