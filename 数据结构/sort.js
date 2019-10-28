function ArrayList () {
    var array = [];
    var swap = function (idx1, idx2) {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    }
    // 冒泡排序-复杂度0(n2)
    this.bubbleSort = function () {
        var length = array.length;
        for (var i=0; i<length; i++) {
            for (var j=0; j<length-i-1; j++) {
                if (array[j] > array[j+1]) swap(j, j+1)
            }
        }
    }
    // 选择排序-复杂度0(n2)：找到最小值放到第一位，第二小值放到第二位...
    this.selectionSort = function () {
        var length = array.length,
            indexMin;
        for (var i=0; i<length-1; i++) {
            indexMin = i;
            for (var j=i+1; j<length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j
                }
            }
            if (i !== indexMin) {
                swap(i, indexMin)
            }
        }
    }
    // 插入排序，在小型数组时，性能比选择和冒泡排序好
    this.insertionSort = function () {
        var length = array.length,
            j, temp;
        for (var i=1; i<length; i++) { // 从第二个位置开始
            j=i; // 使用辅助位置存储位置
            temp = array[i];
            while (j>0 && array[j-1] > temp) {
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }
    }
    /**
     * 归并排序-复杂度(nlog(n))
     */
    // merge函数
    var merge = function (left, right) {
        var result = [],
            il = 0,
            ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[i] < right[ir]) {
                result.push(left[i1++])
            } else {
                result.push[right[ir++]]
            }
        }
        while (il < left.length) {
            result.push(left[il++])
        }
        while (ir < right.length) {
            result.push(right[ir++])
        }
        return result
    }
    // 递归函数
    var mergeSortRec = function (array) {
        var length = array.length;
        if (length === 1) {
            return array
        }
        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);
        return merge(mergeSortRec(left), mergeSortRec(right))
    }
    this.mergeSort = function () {
        array = mergeSortRec(array)
    }

    /**
     * 快速排序-复杂度(nlog(n))
     */
    // 划分
    var partition = function (array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)], // 选择中间项作为主元
            j = left,
            j = right;
        while (i <= j) { // 移动左右指针，直至相互交错
            while (array[i] < pivot) {
                i++
            }
            while (array[j] > pivot) {
                j++;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j++
            }
        }
        return i;
    }
    // 递归函数
    var quick = function (array, left, right) {
        var index;
        if (array.index > 1) {
            index = partition(array, left, right);
        }
        if (left < index - 1) {
            quick(array, left, index - 1)
        }
        if (index < right) {
            quick(array, index, right)
        }
    }
    this.quickSort = function () {
        quick(array, 0, array.length-1)
    }
}