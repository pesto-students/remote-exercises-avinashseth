function longestWordInString(stringOfWords) {
  
  let words = stringOfWords.split(' ');
  
  let longestWordLength = 0;

  for(let i = 0; i < words.length; i++){

    if(words[i].length > longestWordLength){

        longestWordLength = words[i].length;
        
    }

  }
  
  return longestWordLength;

}

export { longestWordInString };
