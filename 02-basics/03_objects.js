// singleton
Object.create  // constructor method

// object literals

const mySymbol = Symbol("KEY1")

const JsUser = {
    name: "vikram",
    "Full name": "vikram mishra",
    mySymbol: "mykey1", // here keys is string not a symbol form
    [mySymbol]: "mykey1",// now this is symbol form it's syntax
    age: 22,
    location: "delhi",
    email: "mishravikram@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"] 

} // maked obj with literals method

console.log(JsUser.email); // object accessing method
console.log(JsUser["email"]); //2nd method for obj accessing. email written in string because in object keys are bydefault string
console.log(JsUser['Full name']);
console.log(JsUser.mySymbol);
console.log(typeof JsUser.mySymbol);
console.log(JsUser[mySymbol]);
console.log(typeof JsUser[mySymbol]);

JsUser.email = "vikram@facebook.com" //change email overwrite
// Object.freeze(JsUser) // freeze the upper line of code now we can't change the email, we can't overwrite
JsUser.email = "vikram@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");

}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


