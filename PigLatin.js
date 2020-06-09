function translatePigLatin(str) {
  
  // we can set two variables to start. The first one is an empty string that will be filled with the final result. The second one is a regex that identifies vowels in a string. 
  var pigLatin = '';
  var regex = /[aeiou]/gi;

//if the first element of the string (str[0]) matches any alement within the regex, then fill the pigLatin string with the string itself and "way" at the end.
  if (str[0].match(regex)) {
    pigLatin = str + "way";
//else, if no elements on the string matche the regex (in other words, if there are only consonants), then the result will be equal to null when it comes to matching vowels, and we can add "ay" to the end right away.
  } else if(str.match(regex) === null) {
    pigLatin = str + "ay";
  }
  //else, we can set up a new variable (vowelIndex) to find out the number of consonants before the first vowel by returning the index of the vowel within the string. So, the method indexOf, will get the matching between the vowel regex and the string itself. Counting from index 0.
   else {
    var vowelIndex = str.indexOf(str.match(regex)[0]);
//finally,by using the substring method, we can place the vowel from the first string in last, then add the rest of the string, and the "ay" ending.
    pigLatin = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
  }

  return pigLatin;
}


translatePigLatin("consonant");
