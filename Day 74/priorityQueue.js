// Priority Queue implemented Using Sorting Method

class PriorityQueue {
    constructor() {
        this.queue=[];
    }

    enqueue(value,priority) {
        this.queue.push({ value, priority });
        this.queue.sort((a,b) => b.priority - a.priority); // Highest Priority First
    }

    dequeue() {
        return this.queue.shift(); // Remove the first item (highest priority)
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
};

const pq = new PriorityQueue();
pq.enqueue("Fever", 1);
pq.enqueue("Accident", 5);
pq.enqueue("Headache", 3);
pq.enqueue("Heart Attack", 7);

console.log(pq.dequeue()); // Accident (priority: 5)
console.log(pq.dequeue()); // Headache (priority: 3)