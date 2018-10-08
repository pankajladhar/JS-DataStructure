/* 
    Like Stack, Queue is a linear structure which follows a particular order in which 
    the operations are performed. The order is First In First Out (FIFO).  
    A good example of queue is any queue of consumers for a resource where the consumer 
    that came first is served first.
    The difference between stacks and queues is in removing. 
    In a stack we remove the item the most recently added; in a queue, 
    we remove the item the least recently added.

    Operations on Queue:
    Mainly the following four basic operations are performed on queue:

    Enqueue:    Adds an item to the queue.
    Dequeue:    Removes an item from the queue. The items are popped in the same order in 
                which they are pushed.
                If the queue is empty, then it is said to be an Underflow condition.
    Front:      Get the front item from queue.
    Rear:       Get the last item from queue.

*/

class Queue {
    constructor() {
        this.storage = []
    }

    enqueue(data) {
        this.storage.push(data)
    }

    denqueue() {
        this.storage.shift();
    }

    front() {
        return this.storage[0]
    }

    rear() {
        return this.storage[this.storage.length - 1]
    }


    printQueue() {
        return this.storage;
    }
}

export default Queue;