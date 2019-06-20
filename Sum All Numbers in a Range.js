function sumAll(arr) {

//spread operator (...arr) converts an array into a list through destructuring ...[1,4] => 1,4

//Math.min callsback the smallest number on a list. It doesn't work with arrays, and that's why we needed to destructure
//Math.max callsback the largest number on a list. It doesn't work with arrays, and that's why we needed to destructure

const first = Math.min(...arr);
const last = Math.max(...arr);

 //we set the variable to zero before settig the for loop that is going to iterate through the list to add one until the result is equal to 4 (last)
  //1+1=2; 2 is still < to 4, so 2+1= 3; 3 is still < to 4, so 3+1=4; 4 is = to 4, so the for loop stops iterating
  let total = 0;

  for (let i = first; i <= last; i++) {
    total += i;
  }
  
  return total;
}

sumAll([1, 4]);
