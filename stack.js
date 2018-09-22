function Stack () {
  this.stack = [];
}

Stack.prototype.push = function (data) {
  this.stack.push (data);
}

Stack.prototype.pop = function (data) {
  return this.stack.pop ();
}

Stack.prototype.length = function () {
  return this.stack.length;
}

Stack.prototype.top = function () {
  return this.stack [this.stack.length - 1]
}

var st = new Stack ();
st.push (10);
st.push (20);
st.push (30);
console.log (st.top ());    // 30
console.log (st.pop ());    // 30
console.log (st.top ());    // 20