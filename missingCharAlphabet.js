// find a missing letter 

let str = new String("abcdefghijklmnopqrstuvwxy");

function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {
  
  //extract char value for each letter
    let code = str.charCodeAt(i);

  //compare the value extracted to the sum of the   first charcater and the current position. if those value don't match, it means one letter that was supposed to be at that position isn't there
    if (code !== str.charCodeAt(0) + i) {
      
      //so we use a function to convert the value into it's corresponding char and return it
      return String.fromCharCode(code - 1);

    }

  }

  return undefined;

}
