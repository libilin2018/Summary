function ajax(type, url, dataObj, callback, async) {
    var paramsStr = buildParamsStr(dataObj),
        xhr = null;
    if (type === 'get' && dataObj) {
        url = addURLParams(url, paramsStr);
    }
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300 || status == 304) {
                var result = xhr.responseText;
            }
        }
    };
    xhr.open(type, url, async);
    if (type == 'get') {
        xhr.send(null);
    } else {
        //application/x-www-form-urlencoded 发送到服务器之前，所有字符都会进行编码
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        xhr.send(paramsStr);
    }
}

function buildParamsStr(obj) {
    var str = '';
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            str += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
        }
    }
    return str;
}

function addURLParams(url, paramsStr) {
    url += (url.indexOf('?') == -1) ? '?' : '&';
    url += paramsStr + '&' + new Date().getTime();
    return url;
}


/* 
    jquery ajax
*/

$.ajax({
    url: '',
    //默认值是‘type’
    type: 'GET',
    data: {},
    dataType: 'json',
    //默认值: "application/x-www-form-urlencoded"
    contentType: '',
    async: true,
    success: function() {},
    error: function() {},
    complete() {

    }
})