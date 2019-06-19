function diffArray(arr1, arr2) {
  var newArr = [];

const diff1 = arr1.filter(function(num) {
  if(!arr2.includes(num)){
  return true}
});

const diff2 = arr2.filter(function(num){
if(!arr1.includes(num)){
  return true;
}
});
return diff1.concat(diff2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
