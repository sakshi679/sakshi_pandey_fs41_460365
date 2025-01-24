function factorial(n){
    if(n < 0 || isNaN(n)){
      return "Invalid input";
    }
    if(n===0 || n===1){
      return 1;
    }
    return n * factorial(n-1);
  };
  console.log(factorial(5));
  console.log(factorial(-7));
  console.log(factorial(0));