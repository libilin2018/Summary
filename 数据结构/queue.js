let Queue = (function () {
    const items = new WeakMap();
    class Queue {
        constructor () {
            items.set(this, [])
        }
        enqueue (element) {
            items.get(this).push(element)
        }
        dequeue () {
            return items.get(this).shift()
        }
        size () {
            return items.get(this).length
        }
    }
    return Queue
})();

// 修改版本：优先队列
function PriorityQueue () {
    let items = [];
    function QueueElement (element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false; // 使用标志位判断是否已添加进队列
        for (let i=0; i<items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueElement);
        }
    }
    this.print = function () {
        for (let i=0; i<items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`)
        }
    }
}

// 修改版本：循环队列
function hotPotato (nameList, num) {
    let queue = new Queue();
    for (let i=0; i<nameList.length; i++) {
        queue.enqueue(nameList[i])
    }
    let eliminated = '';
    while (queue.size() > 1) {
        for (let i=0; i<num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '被淘汰了')
    }
    console.log('幸存者' + queue.dequeue());
}