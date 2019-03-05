var arr = [1,2,3,4,6,7,9,11,12,14,15,16,17,19,33,34,43,45,55,66];

/**
 * @description function to perform binary search.
 * @param {Array} arr input array
 * @param {Number} element to find in the array.
 */
function binarySearch (arr, element) {
  var lowerIndex = 0,
      upperIndex = arr.length - 1,
      midIndex = -1;
  while (upperIndex >= lowerIndex) {
    midIndex = (lowerIndex + (upperIndex - lowerIndex)) / 2;
  }
}