// Priority Queue implemented Using Heaps

class MaxPriorityQueue {
    constructor() {
        this.queue=[];
    }

    // Enqueue an item
    enqueue(value,priority) {
        this.queue.push({ value, priority });
        this.heapifyUp();
    }

    // Move new node up
    heapifyUp() {
        let index = this.heap.length-1;
        while(index > 0) {
            let parent = Math.floor((index-1)/2);
            if(this.heap[index].priority <= this.heap[parent].priority) break;
            this.swap(index,parent);
            index=parent;
        }
    }

    // Dequeue highest-priority item
    dequeue() {
        if(this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if(this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }
        return max;
    }

    // Restore heap downwards
    heapifyDown() {
        let index = 0; // current index;
        let length = this.heap.length;
        while(true) {
            let left = 2 * index + 1;
            let right = 2* index + 2;
            let largest = index;

            if(left < length && this.heap[left].priority > this.heap[largest].priority) {
                largest = left;
            }

            if(right < length && this.heap[right].priority > this.heap[largest].priority) {
                largest = right;
            }

            if (largest === index) break;
            this.swap(index, largest);
            index=largest;
        }
    }

    // View front item
    front() {
        return this.queue[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    // Helper function that swaps values between two variables
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
};

