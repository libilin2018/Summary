/*
字符组： [0-9]
    反字符组： [^0-9]
    简写：  \d  
            \D 
           \w  字母数字或者下划线的中任何一个字符 [0-9a-zA-Z_]
           \W [^0-9a-zA-Z_]
           \s 空白符
           \S 
           .  通配符
量词：{m, n}
    简写： ? 匹配0或1个   （惰性匹配）
          + 匹配1一个以上
          * 匹配任意次  （贪婪匹配）
*/
// 匹配十六位颜色值
var reg1 = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
// 匹配24时制时间
var reg2 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/g;
// var reg2 = /(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])/g;
// 匹配日期
var reg3 = /[0-9]{4}-(0[0-9]|1[0-2])-(0[0-9]|[12][0-9]|3[0-1])/;
// 匹配文件路径
var reg4 = /^([a-zA-Z]:\\)([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?/;
// 量词*是贪婪的，遇到双引号还会继续匹配
// var reg5 = /id=".*"/; //id="container" class="main"
var reg5 = /id=".*?"/;

/*
    匹配位置：
        ^ &
        \b  单词边界
        \B  非单词边界
        (?=p)  p前面的位置
        (?!p)  
*/
// 匹配位置
var reg6 = /^|$/gm;
// 不匹配任何东西
var reg7 = /.^/;
// 千位分隔符
var reg8 = /(?!^)(?=(\d{3})+$)/g;
// 支持其他形式
// var reg9 = /(?!\b)(?=(\d{3})+\b)/g;
var reg9 = /\B(?=(\d{3})+\b)/g;
// 货币格式化  1234 => $ 1,234.00
function format (num) {
    return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ',').replace(/^/, '$ ');
}
/* 
    验证密码
        (?=.*[0-9])^ 必须包含数字
        (?![0-9]{6,12}$)^ 不能全部是数字
*/
// var reg10 = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/;
var reg10 = /((?![0-9]{6,12}$)(?![a-z]{6,12}$)(?![A-Z]{6,12}$))^[0-9a-zA-Z]{6,12}$/;


var reg11 = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
reg11.test(string); // 正则操作即可，例如
console.log(RegExp.$2); // "06"
var result1 = string.replace(reg11, "$1/$2/$3");
var result2 = string.replace(reg11, function (match, year, month, day) {
    return year + '/' + month + '/' + day;
})
console.log(result1, result2)

// 反向引用  \1 引用前面的 (-|\/|\.)
var reg12 = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
// 分组后有量词，会捕获最后一次匹配
var reg13 = /(\d)+ \1/;
console.log(reg13.test('1234 4'))
// 非捕获括号 (?:p1|p2|p3)



var str1 = "#fff #E12 #444444";
var str2 = "23:59";
var str3 = "2019-02-26";
var str4 = "F:\\";
var str5 = '<div id="container" class="main"></div>';
var str6 = "I\nlove\njavascript";
var num = 1234;