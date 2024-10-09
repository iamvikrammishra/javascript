// these are array specific loop
//loop ko array string obj kisi pe bhi lga sakte hai
// for of -> loop

// ["", "", ""]
// [{}, {}, {}]

// syntax
/*for (const item of object) {
    
}*/


const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}



const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}



// maps
//array jaisa hi hota hai
//map apne aap mai ek obj hai
//unique values ke liye jaani jaati hai do same values entry nhi hogi and order wise print hoga

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);


// complete map ek sath print ho jayega
/* for (const key of map) {

//    console.log(key);
    
}

*/


// if alg alg value print krna ho to uske liye alg ek syntax hai
//array ka destructure ho jata hai yha pe
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


//////for of loop on object

/*
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {

    console.log(key, ':-', value);

    
}
// object is not iterable with this syntax
*/

//this object is iterable with for in loop