class Stack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop() {
        if (this.arr.length === 0) {
            throw new Error("Stack is empty so can not pop element, Underflow")
        }
        else {
            this.arr.pop();
        }
    }

    peek(){
        return this.arr[this.arr.length - 1]
    }

    top (){
        return this.arr[this.arr.length - 1]
    }

    isEmpty(){
        return this.arr.length === 0
    }

    printStack(data) {
        return this.arr;
    }
}

export default Stack;