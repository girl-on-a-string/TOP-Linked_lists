// full list

const LinkedList = () => {
    const head = () => { // returns first item in list

    }

    const tail = () => { // returns last item in list

    }

    const append = (value) => { // adds new value to end of list
        let newAppendNode = Node(value, null);

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

//

const Node = (value, nextNode) => {
    let value = null;
    let nextNode = null;

    return {
        value, nextNode
    }
}