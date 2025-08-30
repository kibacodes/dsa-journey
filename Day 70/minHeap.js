class MinHeap {
  constructor() {
    //this.heap = [];
    // Initially, the heap can be empty or with values.
    // this.heap = [5, 10, 20, 30];
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);

      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  extract() {
    if(this.heap.length < 1) {
        return null;
    }

    let min = this.heap[0];
    let lastIndex = this.heap.length-1;

    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
    
    this.heap.pop();// removes last element of heap

    this.heapifyDown(0);

    return min;
  }

  heapifyDown(i) {
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);
    let n = this.heap.length;

    let smallest = i;

    if(left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if(right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    // swap between i (the last node val which replaced the root) and the smallest got from above.
    if(smallest !== i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest); 
      // function call since we need to check other subtrees to check for other values 
      // which are small than the current smallest value.
      // using n above to check whether left and right child exist or not, if they do
      // then only execute, otherwise stop execution
    }
  }

  peek() {
    if (!this.heap.length) return null;

    return this.heap[0];
  }
}

let heap = new MinHeap();

// console.log(heap.heap);

// heap.insert(1);
// heap.insert(0);

heap.insert(5);
heap.insert(20);
heap.insert(4);
heap.insert(10);
heap.insert(1);
heap.insert(0);

console.log(heap.peek());
console.log(heap.extract());
console.log(heap.extract());
heap.insert(7);
console.log(heap);
