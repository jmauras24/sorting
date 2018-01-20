describe('Bubble Sort', function(){
  var testArr = [6, 3],
   testArr1 = [6, 3, 2],
   testArr2 = [6, 3, 4, 7, 1, 2],
   testArr3 = ['v', 'd', 'r', 'g', 's', 'q', 'c', 'a'];

  // beforeEach(function() {
  //   spyOn(testArr, 'swap');
  // });
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });
  it('return two numbers of an array', function () {
    expect(bubbleSort(testArr)).toEqual([3, 6]);
  });
  it('return three numbers of an array', function () {
    expect(bubbleSort(testArr1)).toEqual([2, 3, 6]);
  });
  it('return six numbers of an array', function () {
    expect(bubbleSort(testArr2)).toEqual([1, 2, 3, 4, 6, 7]);
  });
  it('return multiple characters of an array', function () {
    expect(bubbleSort(testArr3)).toEqual(["a", "c", "d", "g", "q", "r", "s", "v"]);
  });
});
