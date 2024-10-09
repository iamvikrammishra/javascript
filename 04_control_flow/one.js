////control flow
//comparision operator 
//<, >, <=, >=, ==, !=, ===, !==

// const isUserloggedIn = true
// const temperature = 41

// if(temperature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greter than 50");
// }
// console.log("executed");


///////////////

const score = 200

/*if(score > 100){
    let power = "fly"
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);// local scope se bahar use nhi krsakte uske variable ko
*/


////yahi agr var datatype use kre to local scope ke bahar bhi iss variable kaa use kr sakte hai
///yahi reason hai ki mostly hm var use nhi krte

/*if(score > 100){
    var power = "fly"
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);
*/

////short head notation
//yha hm scope kaa use nhi krenge {},  yha scope use hoga but wo visible nhi hota hai isko implicit scope kahte hai
// but this is not a standard way of writting code
/*const balance = 1000
if(balance > 500) console.log("test"), console.log("test2");
*/



////////nested if else

/*const balance = 1000

if(balance < 500)
{
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900) {
    console.log("less than 900");
}else{
console.log("less than 1200");
}
*/

/////multiple condition cheaked at a time

// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard && 2==2){
//     console.log("Allow to buy a course");
// }




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy a course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}



