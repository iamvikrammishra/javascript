// kis tarah se data ko memory mai rakha jata hai aur access kiya jata hai 
//uss basis pe datatype ko do cateogary mai rakha gya hai 
//1) primitive
//7 types
//String, Number, Boolean, null, undefined, symbol, Bigint

const id = Symbol('123')
const anotherId = Symbol('123') //both are different  both are unique if even pass same values
console.log(id === anotherId);

//2) non-primitive or refrence type

//array, objects, functions
 
// array =>  []
// Object => {}

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "vikram",
    age: 22,
}


const myFunction = function(){
    console.log("Hello ");
}

console.log(typeof myFunction);// types of datatypes


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// two types of memory in js
// 1) stack (primitive)   2) heap (non-primitive)

// jaha stack memory used hoti hai usme hmne jo bhi variable declare kraaa
// uska ek copy milta hai

//and jb memory heap ke andr define hoti hai to wha se milta hai ek refrence original 
//value kaaa that means hm jo bhi change krenge wo original value mai change hogaa

let myYoutubeName = "vikram mishra"
let anotherName =  myYoutubeName
anotherName = "hello jiiii"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "abc@def.com",
    upi: "vkm@mishra" 
}

let userTwo = userOne

userTwo.email = "vikram@facebook.com"

console.log(userOne.email);
console.log(userTwo.email);

