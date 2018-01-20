function split(wholeArray) {
  var half = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, half),
     secondHalf = wholeArray.slice(half);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  var result = [];
  var leftidx = 0, rightidx = 0;
  while (leftidx < firstHalf.length && rightidx < secondHalf.length){
    firstHalf[leftidx] < secondHalf[rightidx] ? result.push(firstHalf[leftidx++]) : result.push(secondHalf[rightidx++]);
  }
  return result.concat(firstHalf.slice(leftidx)).concat(secondHalf.slice(rightidx));
}

function mergeSort(array) {
  if (array.length < 2) return array;
  return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]));
}
