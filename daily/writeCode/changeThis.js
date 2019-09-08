Function.prototype.myCall = function (context) {
  context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.myApply = function (context) {
  context = context || window;
  context.fn = this;
  var result;
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  return function () {
    return _this.apply(context, args.concat(...arguments))
  }
}

function say (name, age) {
  console.log(name, age, this.value)
}
var obj = {
  value: 222
}

say.myCall(obj, 'billy', 18)
say.myApply(obj, ['billy', 18])
say.myBind(obj, 'billy')(18)