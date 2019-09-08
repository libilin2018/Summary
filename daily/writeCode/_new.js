/* 
    实现一个new
*/
function _new (fn, ...args) {
    const obj = Object.create(fn.prototype)
    const ret = fn.apply(obj, args)
    return ret instanceof Object ? ret : obj
}

function _new1 (fn, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, fn.prototype)
    const ret = fn.apply(obj, args)
    return Object.prototype.toString.call(ret) == '[object Object]' ? ret : obj
}

function _new2 () {
    let Con = [].shift.call(arguments);
    let obj = Object.create(Con.prototype);
    let ret = Con.apply(obj, arguments);
    return Object.prototype.toString.call(ret) === '[object object]' ? ret : obj;
}
function Foo (name) {
    this.name = name
}
console.log(_new(Foo, 'billy'), _new1(Foo, 'billy'), _new2(Foo, 'billy'))
