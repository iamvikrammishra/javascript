function sayMyName () {
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("r");
    console.log("a");
    console.log("m");

}
//sayMyName()

/*function addTwoNumbers(number1, number2){
   console.log( number1 + number2);
}
addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 4)
console.log(result);
console.log("result: ", result );

*/
function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result
    //console.log("vikram");// function ke andr return krne ke baad koi bhi line of code execute nhi hota hai

    return number1 + number2
 }
 const result = addTwoNumbers(3, 5)
 //console.log("result: ", result);

 //....make new function.....
/*
 function loginUserMessage(username){

    if(username === undefined)// if(!username) both are equivelent
    {
        console.log("please enter a username");
        return
    }
    return `${usernsme} just logged in`// ye line execute hi nhi hoga because issephle return likh diya gya hai

 }
*/
 //console.log(loginUserMessage("vikram"))
  //console.log(loginUserMessage()) //jb kuchh argument pass nhi krte to value aata undefined not null


  ///......................//////////

  function loginUserMessage(username= "sam"){
    if(!username){

        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
   // console.log(loginUserMessage())

   //console.log(loginUserMessage("vikram"))


   /////'''shopping cart function use'''''////////

   function calculateCartPrice(...num1)//here we used rest operator jisse ye saari value ko array mai print krwa deta hai

   {
    return num1 

   }
   //console.log(calculateCartPrice(200, 400, 600, 1000, 2000))
// one more thing
// val1 val2 use krne se 200 and 400 isme aajayega
   function calculateCartPrice(val1, val2, ...num1) {
    return num1 

   }
   //.log(calculateCartPrice(200, 400, 600, 1000, 2000))



//............................//////???/////


   const user = {
    username: "vikram",
    prices: 100
   }

   function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
   }
   //handleObject(user)// direct object bhi pass kr sakte hai like next line

   handleObject({
    username: "sam",
    prices: 500
   })

   // iske andr array bhi pass kr sakte hai isme ek function define krna hai jo array ko accept krta hai and uski second value ko return kr deta hai

   const myNewArray =[200, 500, 800, 1200]

   function returnSecondValue(getArray){
   return getArray[1]
   }
   //console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 800, 1200 ]));