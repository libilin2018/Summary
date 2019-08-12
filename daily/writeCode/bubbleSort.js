function randomArr (n, l, r) {
  let arr = []
  for (let i=0; i<n; i++) {
    arr.push(Math.round(l + Math.random() * (r - l)))
  }
  return arr
} 
function bubbleSort (arr) {
  for (let i=0, len=arr.length; i<len-1; i++) {
    for (let j=0; j<len-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }
  return arr;
}

function bubbleSortReform (arr) {
  let i = arr.length - 1
  while (i > 0) {
    let flag = 0
    for (let j=0; j<i; j++) {
      if (arr[j] > arr[j+1]) {
        flag = j
        // [arr[j+1], arr[j]] = [arr[j], arr[j+1]] 失效
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    i = flag
  }
  return arr
}
let arr = [4, 3, 2, 1]
console.log(bubbleSortReform(arr))