// test successful

const limitFunctionCallCount = (callBack, limit) => {
  let functionCallCount = 0;

  return (...args) => { 
    
    if(functionCallCount === limit) return null;

    functionCallCount++;

    return callBack(...args);

  }

};

export {
  limitFunctionCallCount,
};
