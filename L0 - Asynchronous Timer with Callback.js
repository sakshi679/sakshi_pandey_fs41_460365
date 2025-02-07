function timer(duration, onCmoplete){
    setTimeout(() => {
      onCmoplete(`Timer of ${duration} ms finished`);
    }, duration);
    }
    timer(3000, (message) => {
      console.log(message);
    });