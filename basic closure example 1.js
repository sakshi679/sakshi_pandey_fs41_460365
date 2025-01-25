
function outer(){
    let meessage = "Hello World";
    
    return function(){
      console.log(meessage);
    }
  }
  let clouser = outer();
  clouser();
  