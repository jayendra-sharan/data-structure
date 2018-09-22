function Stack (N) {
  this.stack = [];
  this.size = N;
}

/**
 * @description push an element in the stack.
 * @param {any} data to be inserted.
 */
Stack.prototype.push = function (data) {
  if (!this.isFull ()) {
    this.stack.push (data);
  } else {
    console.error ("Stack is full.");
  }
}

/**
 * @description removes and returns the element at the top.
 */
Stack.prototype.pop = function () {
  if (!this.isEmpty ()) {
    return this.stack.pop ();
  } else {
    return "Stack is empty.";
  }
}

/**
 * @description checks if the stack is empty.
 */
Stack.prototype.isEmpty = function () {
  return !this.stack.length
}

/**
 * @description checks if the stack is full.
 */
Stack.prototype.isFull = function () {
  return this.stack.length === this.size;
}

/**
 * @description returns the element at the top. Does not remove it.
 */
Stack.prototype.peek = function () {
  if (!this.isEmpty ()) {
    return this.stack [this.stack.length - 1];
  } else {
    return "Stack is empty."
  }
}

var st = new Stack (2);
console.log(st.isFull ());
console.log(st.isEmpty());
console.log (st.pop ());
st.push (10);
st.push (20);
console.log (st.peek ());
console.log (st.pop ());
console.log (st.pop ());
console.log (st.pop ());

