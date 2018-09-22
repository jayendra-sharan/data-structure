function Queue (N) {
  this.queue = [];
  this.size = N;
}

/**
 * @description enqueues an element in the current queue.
 * @param {any} data to be inserted in the queue.
 */
Queue.prototype.enqueue = function (data) {
  if (!this.isFull ()) {
    this.queue.push (data);
  } else {
    console.error ("Queue is full.");
  }
}

/**
 * @description removes an element, by default, the first in the queue.
 */
Queue.prototype.dequeue = function () {
  console.log ("is Empty: ", this.isEmpty ());
  if (!this.isEmpty ()) {
    return this.queue.shift ();
  } else {
    return "Queue is empty.";
  }
}

/**
 * @description gets the first element, without removing it.
 */
Queue.prototype.peek = function () {
  if (!this.isEmpty ()) {
    return this.queue[0];
  } else {
    return "Queue is empty";
  }
}

/**
 * @description checks if the queue is empty.
 */
Queue.prototype.isEmpty = function () {
  return !this.queue.length;
}

/**
 * @description checks if the queue is full.
 */
Queue.prototype.isFull = function () {
  return this.queue.length === this.size;
}

var q = new Queue (5);
console.log (q.isEmpty ());
q.dequeue ();
console.log (q.isFull ());
q.enqueue (10);
console.log (q.isEmpty ());
console.log (q.isFull ());
console.log (q.peek());
q.enqueue (20);
q.enqueue (30);
q.enqueue (40);
q.enqueue (50);
q.enqueue (60);
console.log (q.peek());
console.log (q.dequeue());
console.log (q.dequeue());
console.log (q.dequeue());
console.log (q.dequeue());
console.log (q.dequeue());
console.log (q.dequeue());
console.log (q.peek ());