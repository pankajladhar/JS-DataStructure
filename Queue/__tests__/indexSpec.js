import Queue from './../index';

describe('Queue', () =>{
    it('enqueue method should add item in queue', () =>{
        let queue, updatedQueue;
        queue = new Queue();
        queue.enqueue(1);
        updatedQueue = queue.printQueue();
        expect(updatedQueue).toEqual([1]);

        queue.enqueue(2);
        updatedQueue = queue.printQueue();
        expect(updatedQueue).toEqual([1,2]);
    });

    it('denqueue method should give first element of queue', () =>{
        let queue, updatedQueue;
        queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        updatedQueue = queue.printQueue();
        expect(updatedQueue).toEqual([1,2]);
        queue.denqueue();
        updatedQueue = queue.printQueue();
        expect(updatedQueue).toEqual([2]);
    });
    it('front method should give first element of queue', () =>{
        let queue
        queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1)
    });

    it('rear method should give last element of queue', () =>{
        let queue
        queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.rear()).toBe(2)
    });
})