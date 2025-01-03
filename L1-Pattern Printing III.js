function printPattern(N) {

    console.log('* '.repeat(N).trim());
    for (let i = 0; i < N - 2; i++) {
      console.log('*');
    }
    
    if (N > 1) {
      console.log('* '.repeat(N).trim());
    }
  }
  
  // Example usage:
  let N = 5;
  printPattern(N);
  