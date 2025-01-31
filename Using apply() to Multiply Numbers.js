function multiplyNumbers(a , b){
    return function() {
         return a * b;
     }.apply(null);
 };
 console.log(multiplyNumbers(5,5));
 
 