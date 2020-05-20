function isTriangle(a, b, c) {
  
  if(a + b <= c || b + c <= a || c + a <= b) {
    
    return false;

  } else {

    return true;

  }

}

export {
  isTriangle,
};
