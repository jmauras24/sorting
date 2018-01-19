describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  var testArr = [3,6,4];

  beforeEach(function() {
  });
  it('bubblesort returs sorted array', function () {
    expect(bubbleSort(testArr)).toBe([3,4,6]);
  });

});
// describe('Bubble Sort', function(){
//   it('counts number of swaps', function(){
//     expect(swapCounter).toEqual(100);
//   });
// });

// describe('palindrome', function() {

//   beforeEach(function(){

//   });


//   it('palindrome is a function', function() {
//     expect(typeof palindrome).toEqual('function');
//   });

//   it('palindrome returns a boolean value', function() {
//     expect(typeof palindrome('codepen')).toEqual('boolean');
//   });
//   it('returns true if the argument is a palindrome', function() {
//     expect(palindrome('racecar')).toEqual(true);
//     expect(palindrome('madam')).toEqual(true);
//   });
//   it('returns false if the argument is not a palindrome', function() {
//     expect(palindrome('Mark Davis')).toEqual(false);
//     expect(palindrome('space jam')).toEqual(false);
//   });
//   it('does not use Array.prototype.reverse', function(a) {
//     spyOn(Array.prototype, 'reverse').and.callThrough();
//     palindrome('Hello World');
//     expect(Array.prototype.reverse.calls.any()).toEqual(false);
//   });
// });


