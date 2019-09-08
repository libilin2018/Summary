var reg = /[-_@]([a-z])?/g
var str = 'back-color-zis'
str = str.replace(reg, function (match, i) {
    return i.toUpperCase()
})
console.log(str)