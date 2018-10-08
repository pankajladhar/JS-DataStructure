/* 
    Stack is a linear data structure which follows a particular order in which the operations are performed. 
    The order may be LIFO(Last In First Out) or FILO(First In Last Out).

    Mainly the following three basic operations are performed in the stack:

    Push:       Adds an item in the stack.

    Pop:        Removes an item from the stack. The items are popped in the reversed order in which they are pushed. 
                If the stack is empty, then it is said to be an Underflow condition.

    Peek/Top:   Returns top element of stack.

    isEmpty:    Returns true if stack is empty.

*/

class Stack {
    constructor() {
        this.counter = 0;
        this.storage = {};
    }

    push(data) {
        this.storage[this.counter] = data;
        ++this.counter
    }

    pop() {
        if (Object.keys(this.storage).length === 0) {
            throw new Error("Stack is empty so can not pop element, Underflow")
        }
        else {
            delete this.storage[this.counter - 1]
            this.counter --;
        }
    }

    peek() {
        return this.storage[this.counter-1]
    }

    top() {
        return this.storage[this.counter-1]
    }

    isEmpty() {
        return Object.values(this.storage).length === 0
    }

    printStack() {
        return Object.values(this.storage);
    }
}

export default Stack;