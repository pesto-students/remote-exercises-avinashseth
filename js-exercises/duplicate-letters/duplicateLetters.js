
function duplicateLetters(...args) {

    let duplicateCount = [];
  
    for(let i = 0; i < args.length; i++) {

      for (let j = i + 1; j < args.length; j++) {

        if(args[i] == args[j]) {

          duplicateCount[args[i]] += 1;

        }

      }

    }

    if(duplicateCount > 0) {

      return duplicateCount;

    } else {

      return false;

    }

}

export {
  duplicateLetters,
};
