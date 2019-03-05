function generateRandomArray (N) {
  var tempArr = [];
  for (var index = 0; index < N; index++) {
    tempArr.push (Math.floor (Math.random() * 999));
  }
  return tempArr;
}

var result = generateRandomArray (20);
console.log (result);