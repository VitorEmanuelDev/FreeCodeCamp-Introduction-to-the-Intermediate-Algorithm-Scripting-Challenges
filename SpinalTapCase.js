function spinalCase(str) {
  //To identify all letters (lower and uppercase) within the string, we can use a regular expression with [a-z] and [A-Z] inside of it. Also, we need to use the "g" for the search to be global, otherwise,if there were words with upPerCase letters in the middle,those letters wouldn't be recognized. 
  // On the second part of the parenthesis we have the elements that will replace the items we identified in the first part. So $1 $2 is being used for capturing portions of the match and saving them as placeholders.
  str = str.replace(/([a-z])([A-Z])/g,'$1 $2');

//In this line we're finally putting the new settings into place by using the method toLowerCase() and a regular expression that is set to recognize single spaces or other kinds of spaces with \s+. Also the regex recognizes special characters with \_+. To finish, the second space presents a "-" to replace the spaces between the words.
  return str.toLowerCase().replace(/\s+|_+/g, '-');
}

spinalCase('This Is Spinal Tap');
