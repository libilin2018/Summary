function instanceOf (left, right) {
    var prototype = right.prototype;
        left = left.__proto__;
    while (true) {
        if (left === null)
            return false
        if (left === prototype)
            return true
        left = left.__proto__
    }
}
console.log(instanceOf(new Object(), Object))