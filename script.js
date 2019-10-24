function forEach (someNumbers, someFunction) {
    for (let i = 0; i < someNumbers.length; i++) {
      let newNumber = someNumbers[i]; //newNumber is equal to someNumbers at index i
      someFunction(newNumber);
    }
  }
  
  
  function map (someNumbers, someFunction) {
    const newNumbers = [];
    
    function captureReturnValue (y) {
      let x = someFunction(y);
      newNumbers.push(x);
    }
    
    forEach(someNumbers, captureReturnValue);
    return newNumbers;
  }
  // Uncomment these to check your work!
  // console.log(typeof forEach); // should log: 'function'
  forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]