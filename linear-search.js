/**
 * @description function to find an element in an array.
 * @param {Array} arr input array
 * @param {Number} element element to find
 */
function linearSearch (arr, element) {
  var matchFound = false,
      matchIndex = 0;
  for (var index = 0; index < arr.length; index++) {
    if (element === arr[index]) {
      matchFound = true;
      matchIndex = index;
      break;
    }
  }
  if (matchFound) {
    console.log ("Match found at: ", matchIndex);
  } else {
    console.log ("Element not found.");
  }
}

var arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
linearSearch (arr, 10);
linearSearch (arr, 20);
linearSearch (arr, 45);
linearSearch (arr, 11);
linearSearch (arr, 0);