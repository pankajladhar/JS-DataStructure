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


const Stack = () => {
    let arr = [];
    return {
        push: (data) => {
            arr.push(data);
        },
        pop: () => {
            if (arr.length === 0) {
                throw new Error("Stack is empty so can not pop element, Underflow")
            }
            else {
                arr.pop();
            }
        },
        peek: () => {
            return arr[arr.length - 1]
        },

        top:  () => {
            return arr[arr.length - 1]
        },

        isEmpty: () => {
            return arr.length === 0
        },
        printStack: () => {
            return arr;
        }
    }
}

export default Stack;

