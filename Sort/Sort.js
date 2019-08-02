class Sort {
    constructor() {
        this.arr = []
    }
    // 冒泡排序
    bubbleSort() {
        let temp = -999
        for(let i = 0; i < this.arr.length; i++) {
            for(let j = 0; j < this.arr.length - 1 - i; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    temp = this.arr[j + 1]
                    this.arr[j + 1] = this.arr[j]
                    this.arr[j] = temp
                }
            }
        }
    }
    // 冒泡排序改进
    bubbleBetterSort() {
        let temp = -999
        let flag = false // 交换标识
        for(let i = 0; i < this.arr.length; i++) {
            flag = false
            for(let j = 0; j < this.arr.length - 1 - i; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    temp = this.arr[j + 1]
                    this.arr[j + 1] = this.arr[j]
                    this.arr[j] = temp
                    flag = true
                }
            }
            if (!flag) break;
        }
    }
    // 插入排序
    insertSort() {
        for(let i = 1; i < this.arr.length; i++) {
            if (this.arr[i - 1] > this.arr[i]) {
                let j = i 
                while(this.arr[j - 1] && this.arr[j] < this.arr[j - 1]) {
                    let temp = this.arr[j]
                    this.arr[j] = this.arr[j - 1]
                    this.arr[j - 1] = temp 
                    j--
                }
            }
        } 
    }
    // 快速排序
    fastSort(fastArr = this.arr) {
        if (fastArr.length == 0) {
            return []
        } else {
            let left = []
            let right = []
            let temp = fastArr[0]
            for(let i =0; i < fastArr.length; i++) {
                if (fastArr[i] < temp) {
                    left.push(fastArr[i])
                } else {
                    right.push(fastArr[i])
                }
            }
            return this.fast(left).concat(temp, this.fast(right))
        }
    }
    // 快速排序第二种写法
    fast2Sort(fastArr = this.arr, begin, end) {
        if (begin < end) {
            let key = fastArr[0]
            let i = begin
            let j = end
            while(i < j) {
                while(i < j && fastArr[j] > key) {
                    j--
                }
                if (i < j) {
                    fastArr[i] = fastArr[j]
                    i++
                }
                while(i < j && fastArr[i] < key) {
                    i++
                }
                if (i < j) {
                    fastArr[j] = fastArr[i]
                    j--
                }

            }
            fastArr[i] = key
            this.fast2Sort(fastArr, begin, i - 1)
            this.fast2Sort(fastArr, i + 1, end)
        }

    }
    // 归并排序
    mergeSort(mergeArr = this.arr) {
        let len = mergeArr.length
        if (len < 2) {
            return mergeArr
        }
        let middle = Math.floor( len / 2)
        let left = arr.slice(0, middle)
        let right = arr.slice(middle)
        return this.merge(this.mergeSort(left), this.mergeSort(right))
    }
    merge(left, right) {
        let result = []
        while(left.length > 0 && right.length > 0) {
            if (left[0] > right[0]) {
                result.push(right.shift())
            } else {
                result.push(left.shift())
            }
        }
        if (left.length > 0) {
            result.push(...left)
        }
        if (right.length > 0) {
            result.push(...right)
        }
        return result
    }
    // 堆排序
    heapAdjust(elements, pos, len) {
        let swap = elements[pos]

        let children = pos * 2 + 1

        while(children < len) {
            if (children + 1 < len && elements[children] < elements[children + 1]) {
                children += 1
            }
            if (elements[pos] < elements[children]) {
                elements[pos] = elements[children]
                pos = children
                children = pos * 2 + 1
            } else {
                break
            }
            elements[pos] = swap
        }
    }
    // 构建堆
    buildHeap() {
        for(let i = this.arr.length / 2; i >= 0; i--) {
            this.headSort(this.arr, i , this.arr.length)
        }
    }
    // 堆排序
    headSort() {
        this.buildHeap()
        // 从尾部开始进行调整
        for(let i = this.arr.length - 1; i > 0; i--) {
            let swap = this.arr[i]
            this.arr[i] = this.arr[0]
            arr[0] = swap
            //进行调整，将最大）元素调整至堆顶
            headAdjust(arr, 0, i)
        }
    }
}