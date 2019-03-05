var arr = [ 108, 883, 419, 734, 967, 520, 448, 783, 636 ];

const merge = (left, right) => {
  let leftIndex = 0, rightIndex = 0;
  let result = [], resultIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  return [
    ...result,
    ...left.slice (leftIndex),
    ...right.slice (rightIndex)
  ];

}

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor (arr.length / 2);
  return merge (mergeSort (arr.slice (0, mid)), mergeSort (arr.slice (mid)));
}

console.log ('Input: ', arr);
console.log ('Sorted: ', mergeSort(arr));