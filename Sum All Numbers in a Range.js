function sumAll(arr) {
let first, last;

if (arr[0] > arr[1]){
first = arr[1];
last = arr[0];
} else {
first = arr[0];
last = arr[1]; 
}

let total = 0;

for(let i = first; i <= last; i++){
  total = total + i;
}

  return total;
}

sumAll([1, 4]);
