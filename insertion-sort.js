function insertionSort (arr) {
  var list = [];
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = value;
  }
  return arr;
}

var list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
var sortedList = insertionSort (list);
console.log (sortedList);