function destroyer(arr) {

// the variable toDestroy is going to get all numbers from the "argument array" within the function destroyer: destroyer([1, 2, 3, 1, 2, 3], 2, 3); and it's going to return the selected numbers in the array, as a new array object through slice starting at index 0 (the first number within the array). 
const toDestroy = Array.from(arguments).slice(0);

//after identifying the elements and slicing them, we're going to filter the "argument array" for it not to include any elements that are outside of the array (in this case 2 and 3). Tto achieve this, we're going to use a boolean to test presence of those elements within the filtered array. So, if toDestroy doesn't include 2 and 3 (element) then return true. We could have also said: if toDestroy includes any 2 and 3 (elemnt), then return false.   
  const cleanArr = arr.filter(function(element){
    if(!toDestroy.includes(element)) {

      return true;
    }

  });
//finally after the previous steps, we're ready to return the array without any 2 or 3.
  return cleanArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
