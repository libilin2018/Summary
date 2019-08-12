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