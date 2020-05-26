
function lastIndexOf(elementToSearchFor, list) {
  
  let lastIndexOfElement = -1;

  for(let i = 0; i < list.length; i++) {

    if(list[i] === elementToSearchFor) {

      lastIndexOfElement = i;

    }

  }

  return lastIndexOfElement;

}

export {
  lastIndexOf,
};
