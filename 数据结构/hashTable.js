/**
 * 散列表
 */
//散列函数
var ajb2HashCode = function (key) {
    // 尽可能减少冲突
    var hash = 5381;
    for (var i=0; i<key.length; i++) {
        hash = hash*33 + key.charCodeAt(i);
    }
    return hash % 1013;
}
function HashTable () {
    var table = [];
    this.put = function (key, value) {
        var position = ajb2HashCode(key);
        table[position] = value;
    }
    this.get = function (key) {
        return table[ajb2HashCode(key)]
    }
    this.remove = function (key) {
        table[ajb2HashCode(key)] = undefined;
    }
}

/**
 * 冲突处理方法
 */
//分离链接：在散列表的每个位置创建一个链表
var valuePair = function (key, value) {
    this.key = key;
    this.value = value;
}
function HashTable () {
    var table = [];
    this.put = function (key, value) {
        var position = ajb2HashCode(key);
        if (table[position] == undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new valuePair(key, value))
    }
    this.get = function (key) {
        var position = ajb2HashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while(current) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
    }
    this.remove = function (key) {
        var position = ajb2HashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    // 该位置链表是否为空事重置
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}

//线性探测
function HashTable () {
    var table = [];
    this.put = function (key, value) {
        var position = ajb2HashCode(key);
        if (table[position] == undefined) {
            table[position] = new valuePair(key, value);
        } else {
            var index = ++position;
            while (table[index] != undefined) {
                index++;
            }
            table[position] = new valuePair(key, value)
        }
    }
    this.get = function (key) {
        var position = ajb2HashCode(key);
        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position].value;
            } else {
                var index = ++position;
                while (table[index] == undefined || table[index].key !== key) {
                    index++;
                } 
                if (table[index].key === key) {
                    return table[index].value;
                }
            }
        }
        return undefined;
    }
    this.remove = function (key) {
        var position = ajb2HashCode(key);
        if (table[position] !== undefined) {
            if (table[position].key === key) {
                table[index] = undefined;
            } else {
                var index = ++position;
                while (table[index] == undefined || table[index].key !== key) {
                    index++;
                } 
                if (table[index].key === key) {
                    table[index] = undefined;
                }
            }
        }
        return undefined;
    }
}