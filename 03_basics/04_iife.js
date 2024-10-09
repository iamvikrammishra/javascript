/* immidiately invoked function expression (iife) 
mainly two resons for useing iife

1) koi function likha hai usko immediately execute karwana hai
2) global scope se polution nhi chahiye

kai baar global function ke andr se chije polute hoti hai aur hme
 lgta hai ye pollution hme atleast iss function ke andr nhi chahiye
  to hm use krte hai iife
*/

// function vikram (){
//     console.log(`DB CONNECTED`);

// }
// vikram()

///////name iife
(function vikram(){
    console.log(`DB CONNECTED`);

})();// do iffe ek sath ek file mai likhne pe semicolon use kre


// //(function chai(){
//     (() => { 
//     console.log(`DB CONNECTED2`);
// }) ()

//unname iffe
((name) => {
    console.log(`DB CONNECTED2 ${name}`);
}) ('vikram')