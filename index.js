// full list

const LinkedList = () => {
    const head = () => { // returns first item in list

    }

    const tail = () => { // returns last item in list

    }

    const append = (value) => { // adds new value to end of list
        let newAppendNode = Node(value);

    }

    const prepend = (value) => { // adds new value to beginning of list

    }

    const size = () => { // returns size of list

    }

    const at = (index) => { // returns node at current index

    }

    const pop = () => { // removes last item in list

    }

    const contains = (value) => { // returns true if value is in list, otherwise returns false

    }

    const find = (value) => { // returns index of value if value is present, otherwise returns null

    } 

    const toString = () => { // represents linkedlists objects as strings, so you can print and preview them in the console

    }

    return {
        append, prepend, size, head, tail, at, pop, contains, find, toString
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

node1.nextNode = node2;

console.log(node1)
console.log(node1.nextNode);

console.log(node2);
console.log(node2.nextNode);

