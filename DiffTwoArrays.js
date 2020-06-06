//The goal here is to compare two arrays and return a new array with items only found in one of the two given arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
//since we already have the function set up, we can write a constant that will filter arr1 for all numbers within it, and then we are going to use a boolean and the includes() method to check if within arr2 we can find any of the numbers that were filtered from arr1. That search will only return true for the numbers within arr1 that aren't included in arr2. 
const diff1 = arr1.filter(function(num) {
  if(!arr2.includes(num)){
  return true}
});
//here, we're going to do the same thing, but going from arr2 to arr1. Which means we're going to set up a constant that will filter arr2 for all numbers within it, and then we are going to use a boolean and the includes() method to check if within arr1 we can find any of the numbers that were filtered from arr2. That search will only return true for the numbers within arr2 that aren't included in arr1. 
const diff2 = arr2.filter(function(num){
if(!arr1.includes(num)){
  return true;
}
});
  
  //Finally, after filtering and checking for different elements both ways. The numbers that remain from the two previous steps are going to be returned within a single array, and for that to happen we can use the concat method.  
return diff1.concat(diff2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
