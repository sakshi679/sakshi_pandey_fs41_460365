function Person(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  }
  
  let person1 = new Person("Sakshi", 20);
  let boundDisplayInfo = person1.displayInfo.bind(person1);
  boundDisplayInfo();
  