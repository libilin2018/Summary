function test(arr1, arr2, arr3) {
    var sum = arr1[0];
    var maxValue,
        temp = [];
    for (var i = 0, length = arr2.length; i < length - 2; i++) {
        for (var j = i + 1; j < length - 1; j++) {
            for (var k = j + 1; k < length; k++) {
                if ((arr2[i] + arr2[j] + arr2[k]) <= sum) {
                    temp.push(arr3[i] + arr3[j] + arr3[k]);
                }
            }
        }
    }
    maxValue = Math.max(...temp);
    console.log(maxValue);
}
test([1000], [300, 600, 200, 180, 100, 450], [6, 10, 3, 4, 5, 8]);

function filter2(arr1, arr2) {
    var start = arr1[0] - 1,
        end = arr1[1],
        length = end - start;
    var temp = arr2.slice(start, end).reverse();
    arr2.splice(start, length, ...temp);
    console.log(arr2);
}

function filter3(arr1, arr2) {
    var value = [];
    var temp;
    for (var i = 0, length = arr1.length; i < length; i++) {
        temp = arr1[i];
        if (arr2.indexOf(temp) == -1) {
            value.push(temp);
        }
    }
    console.log(value);
}

// filter2([3, 5], [11, 22, 33, 44, 55, 66, 77]);
// filter3([1, 2, 3, 4], [2, 3]);