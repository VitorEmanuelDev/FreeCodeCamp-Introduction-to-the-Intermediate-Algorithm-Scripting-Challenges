function whatIsInAName(collection, source) {
  
  //Let's keep a placeholder array to receive the filtered elements
  let arr = [];
 
  //We're going to use the .filter method on the collection argument to look for elements within it

  arr = collection.filter(function(obj){

//After setting up the function, we need to establish the conditions for returning an output after iterating the source. We can do this with a for loop, an if statement and a boolean expression. 
    for(let i in source){
//So, considering each and every element within the source "let i in source[i]"
      if(source[i] != obj[i]){
 //if an element filtered in the source doesn't correspond to an element filtered in the object, the function will return false. The filter won't be active for non corresponding elements, and the placeholder array "arr" will still be empty
        return false;
      }
    }

    //However,if an element filtered in the source corresponds to an element filtered in the object, the function will return true. So, for corresponding elements, the filter will be active, and the placeholder array will receive the the elements matched with "return arr".
      return true;
    
  });

 
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
