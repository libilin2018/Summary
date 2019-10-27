function LinkedList () {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    let length = 0;
    let head = null;
    this.append = function (element) {
        let node = new Node(element),
            current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    },
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
            current = head,
            previous,
            index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    this.toString = function () {
        let current = head,
            string = '';
        while (current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    }
    this.indexOf = function (element) {
        let current = head,
            index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
}