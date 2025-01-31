let user = {
    name: "sakshi",
    age: 20
  };
  function personinfo(){
    console.log(`${this.name} is ${this.age} year old`);
  };
  personinfo.call(user);