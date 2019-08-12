function add () {
  let args = [].slice.call(arguments);
  let fn = function () {
    let fn_args = [].slice.call(arguments)
    return add.apply(null, args.concat(fn_args))
  }
  // 改写toString方法
  fn.toString = function () {
    return args.reduce((a, b) => a + b)
  }
  return fn;
}
console.log(Number(add(1, 2)(4)(5)))