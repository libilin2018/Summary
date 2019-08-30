/* 
深拷贝方式：  1. JSON.parse(JSON.stringify(obj))
             2. for ... in +  递归
缺点： 1.无法拷贝特殊对象（函数，date，reg）
      2. 对象循环引用 （解决方法： 使用一个 WeakMap结构存储已拷贝的对象）
*/

function deepCopy(obj, hash = new WeakMap()) {
    let cloneObj
    let Constructor = obj.constructor
    switch(Constructor){
        case RegExp:
            cloneObj = new Constructor(obj)
            break
        case Date:
            cloneObj = new Constructor(obj.getTime())
            break
        default:
            if(hash.has(obj)) return hash.get(obj)
            cloneObj = new Constructor()
            hash.set(obj, cloneObj)
    }
    for (let key in obj) {
        cloneObj[key] = isObj(obj[key]) ? deepCopy(obj[key], hash) : obj[key];
    }
    return cloneObj
}

function isObj (obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

const obj = {
    arr: [111, 222],
    obj: {key: '对象'},
    date: new Date(),
    reg: /正则/ig
}

const newObj = deepCopy(obj)
console.log(newObj)
