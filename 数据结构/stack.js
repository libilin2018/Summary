// // 缺点：为每一个类的实例创建一个items变量的副本，所以不适合用于创建多个Stack实例
// function Stack() {
//     let items = [];
//     this.push = function (element) {
//         items.push(element);
//     }
//     //...
// }
// // 使用ES6语法
// class Stack {
//     constructor () {
//         this.items = []; // 变量items是公共的，不是私有变量，希望用户只能访问暴露给类的方法
//     }
//     push (element) {

//     }
// }

// // 用ES6的限定作用域Symbol
// let _items = Symbol();
// class Stack {
//     constructor () {
//         this[_items] = []; // Object.getOwnPropertySymbols方法获得类里面所有Symbols属性，所以是一个假的私有属性
//     }
//     //...
// }

/**
 * 用ES6的WeakMap，能实现私有属性，但扩展类无法继承私有属性
 * => WeakMap与Map仅有的区别
 * 1) 没有entries、keys和values等方法
 * 2) 只能用对象作为键
 * => 优点
 * 1) 提高性能
 * 2) 必须用键才能取出值
 */
let Stack = (function () {
    const items = new WeakMap();
    class Stack {
        constructor () {
            items.set(this, []);
        }
        push (element) {
            items.get(this).push(element)
        }
        pop () {
            return items.get(this).pop();
        }
        isEmpty () {
            return items.get(this).length == 0;
        }
        print () {
            console.log(items.get(this).toString())
        }
    }
    return Stack;
})()

// 应用：任意进制转为二进制数
function baseConverter (decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }
    return baseString;
}

console.log(baseConverter(15, 16))