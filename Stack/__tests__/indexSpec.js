import Stack from './../index';

describe('Stack using Class approach', () => {
    it('printStack method should return stack value', () =>{
        let stack, updatedStack;
        stack = new Stack();
        stack.push(1);
        stack.push(2);
        updatedStack = stack.printStack();
        expect(updatedStack).toEqual([1,2])
    });

    it('push method should add item at end of stack', () => {
        let stack, updatedStack;
        stack = new Stack();
        stack.push(1);
        updatedStack = stack.printStack();
        expect(updatedStack).toEqual([1])
        expect(updatedStack[updatedStack.length-1]).toBe(1)

        stack.push(2);
        updatedStack = stack.printStack();
        expect(updatedStack).toEqual([1,2])
        expect(updatedStack[updatedStack.length-1]).toBe(2)
    });

    it('pop method should remove item at end of stack', () => {
        let stack, updatedStack;
        stack = new Stack();

        expect(() => {stack.pop()}).toThrowError("Stack is empty so can not pop element, Underflow");

        stack.push(1);
        stack.push(2);
        stack.push(3);
        updatedStack = stack.printStack();
        expect(updatedStack).toEqual([1,2,3]);
        stack.pop();
        updatedStack = stack.printStack();
        expect(updatedStack).toEqual([1,2]);
        stack.pop();
        updatedStack = stack.printStack();
        expect(updatedStack).toEqual([1]);
    });

    it('peek or top method should return top level element', () =>{
        let stack;
        stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
        expect(stack.top()).toBe(3);
        stack.pop();
        expect(stack.peek()).toBe(2);
        expect(stack.top()).toBe(2);
    });

    it('isEmpty method should return true if stack is empty', () =>{
        let stack;
        stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });
})