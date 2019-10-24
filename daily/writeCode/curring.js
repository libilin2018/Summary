/* 
add()
*/
// function add () {
//   let args = [].slice.call(arguments);
//   let fn = function () {
//     let fn_args = [].slice.call(arguments)
//     return add.apply(null, args.concat(fn_args))
//   }
//   // 改写toString方法
//   fn.toString = function () {
//     return args.reduce((a, b) => a + b)
//   }
//   return fn;
// }
// console.log(Number(add(1, 2)(4)(5)))

/* 
柯里化
*/

function createCurry (fn, args) {
  let length = fn.length;
  args = args || [];
  return function () {
    let _args = [].slice.call(arguments);
    [].push.apply(_args, args);
    if (_args.length < length) {
      return createCurry.call(this, fn, _args)
    }
    return fn.apply(this, _args)
  }
}
function sum (a, b, c) {
  return a + b + c
}
var curry = createCurry(sum)
console.log(curry(1, 2)(3))