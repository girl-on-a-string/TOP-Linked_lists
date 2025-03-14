// full list

const LinkedList = (head = null) => {

    head = head;

    const getHead = () => {
        return head;
    }

    const tail = () => { // returns last item in list
        while (head) {
            head = head.nextNode;

            if (head.nextNode == null) {
                return head;
            }
        }
    }

    const append = (value) => { // adds new value to end of list
        let newAppendNode = Node(value);

    }

    const prepend = (value) => { // adds new value to beginning of list

    }

    const size = () => { // returns size of list
        let count = 0;
        while (head) {
            count++;
            head = head.nextNode;
        } 
        
        return count + 1
    }

    const at = (index) => { // returns node at current index
        let num = 0;

        while (head) {
            head = head.nextNode
            console.log(head);
            num++;

            if (num < index) {
                console.log("this is the node at index " + index + ": " + head.value);
                return head;
            }
        }
    }

    const pop = () => { // removes last item in list
        // while (head) {
        //     if (head.nextNode == null) {
        //         delete head.value
        //     }
        // }
    }

    const contains = (value) => { // returns true if value is in list, otherwise returns false
        if (at(value) == true) {
            return true;
        } else {
            return false;
        }
    }

    const find = (value) => { // returns index of value if value is present, otherwise returns null

    } 

    const toString = () => { // represents linkedlists objects as strings, so you can print and preview them in the console

    }

    return {
        append, prepend, size, head, getHead, tail, at, pop, contains, find, toString
    }
}

// [NODE(head)] -> [NODE] -> [NODE(tail)] -> null

// create node

const Node = (value = null) => {
    value = value;
    let nextNode = null;

    return {
        value, nextNode
    }
}


let node1 = Node("node 1");

let node2 = Node("node 2");

let node3 = Node("node 3");

let node4 = Node("node 4");

let node5 = Node("node 5");

node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;
node4.nextNode = node5;

let list = LinkedList(node1);
list.at(4);

console.log(list.size())

