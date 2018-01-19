function swap(array, firstNumIdx, secondNumIdx) {
  var temp = array[firstNumIdx];
  array[firstNumIdx] = array[secondNumIdx];
  array[secondNumIdx] = temp;
}
function bubbleSort(array) {

  var numComparison = 0;
  var countSwap = 0;

  for(var i = 0; i < array.length; i++) {

    for(var j = 1; j < array.length; j++) {
      numComparison++;
      if(array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }

  }

  console.log('comparisons:', numComparison, 'swap:', countSwap, 'result:',array);
  return array;
}
