const user = {
    username: "vikram",
    price: 999,
    
    welcomeMessage: function(){
        //console.log(`${this.username} , welcome to website`);

        ///console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "jai jai"
// user.welcomeMessage()

//console.log(this); // node enviroment ke andr this keyword refer to the empty object kyunki abhi koi global ke andr context hi nhi hai isliye empty
//op {}


/* same chij agr inspect console(browser) mai print krenge to 
out put (window) aata hai ,,
 browser ke under jo bhi object hai wo window object hai*/


/*function chai(){
    let username = "vikram"
    console.log(this.username);

 }
 chai() */

 /*const chai = () => {
    let username = "vikram"
    console.log(this);
 }
chai()
*/

/*const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));*/


//implicit return
//const addTwo = (num1, num2) => num1 + num2
    
//const addTwo = (num1, num2) => (num1 + num2)
//console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({username: "vikram"})
console.log(addTwo(3, 4))

//////////const myArray.forEach()


//difference bw normal function this uses and arrow function this uses
    







