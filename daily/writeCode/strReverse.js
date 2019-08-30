// 字符串逆置，使用递归
function strReverse (num) {
  let num1 = num/10;
  let num2 = num%10;
  if (num1 < 1) return num
  else
    num1 = Math.floor(num1)
    return `${num2}${strReverse(num1)}`
}

var a = strReverse(1234)
console.log(a, typeof a)