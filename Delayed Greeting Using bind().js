let user = {
    name: "Sakshi pandey"
  };
  function setTimeoutGreeting(greeting){
    setTimeout(() => {
    console.log(`${greeting} ${this.name}`);
    }, 1000);
  };
  let binddfunction = setTimeoutGreeting.bind(user);
  binddfunction("Hello");
  