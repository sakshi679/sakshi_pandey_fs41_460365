const people = [ 
    { 
      name: "Alice", 
      address: { 
        city: "New York", 
        street: { 
          name: "Broadway", 
          number: 123 } } }, 
    { name: "Bob", 
      address: { 
        city: "Los Angeles", 
        street: { 
          name: "Sunset Boulevard", 
          number: 456 } } } 
          ];
    let [ {name: Alicename, address: {city: Alicecity, street: {name: alicestreetname}}} , 
          {name: Bobname, address: {city: Bobcity, street: {name: bobstreetname}}}
          ] = people;
  console.log(`${Alicename} lives in ${Alicecity} on ${alicestreetname}.`);
  console.log(`${Bobname} lives in ${Bobcity} on ${bobstreetname}.`);
  