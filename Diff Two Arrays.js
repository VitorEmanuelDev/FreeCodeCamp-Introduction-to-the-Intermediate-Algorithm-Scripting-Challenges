function diffArray(arr1, arr2) {
  let newArr = [];
  
  for(let i = 0; i < arr1.length; i++){
    let item1 = arr1[i];
    let notFound = true;
    for(let j = 0; j < arr2.length; j++){
      let item2 = arr2[j];

      if (item1 === item2){
        notFound = false;
      }
    }
    if(notFound === true) {
      newArr.push(item1);
    }
  }

  for(let i = 0; i < arr2.length; i++){
    let item1 = arr2[i];
    let notFound = true;
    for(let j = 0; j < arr1.length; j++){
      let item2 = arr1[j];

      if (item1 === item2){
        notFound = false;
      }
    }
    if(notFound === true) {
      newArr.push(item1);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
