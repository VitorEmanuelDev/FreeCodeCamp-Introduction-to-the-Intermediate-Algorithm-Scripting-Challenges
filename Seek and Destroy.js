function destroyer(arr) {
  const toDestroy = [];
  const cleanArr = [];
  for (let i = 1; i < arguments.length; i++) {
    toDestroy.push(arguments[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < toDestroy.length; j++) {
      if (arr[i] === toDestroy[j]) {
        found = true;
      }
    }
    if (found === false){
      cleanArr.push(arr[i]);
    }
  }


  return cleanArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
