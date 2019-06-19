function sumAll(arr) {

//spread operator (...arr) converts an array into a list through destructuring ...[1,4] => 1,4

//Math.min callsback the smallest number on a list. It doesn't work with arrays, and that's why we needed to destructure


const first = Math.min(...arr);
const last = Math.max(...arr);

  let total = 0;

  for (let i = first; i <= last; i++) {
    total += i;
  }
  
  return total;
}

sumAll([1, 4]);
