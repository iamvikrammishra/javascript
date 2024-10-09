// const userEmail = "mishravkm@gmail.com"
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("don't have user email");
}

/////list of falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

////////truthy values /////baaki sb truthy

//"0", 'false', " ", [], {}, function(){}


//array detection empty hai yaa nhi

const arr = []

if(arr.length === 0){
    console.log("array is empty");
}



//////empty obj cheak krne kaaa tarikaa


const emptyObj = {}

if(Object.keys(emptyObj).length === 0)// array bn ke aajata hai keys kaa to uskaa length cheak kr sakte hai
{
console.log("object is empty");
}




/////key point cheak in console

// 




//////// Nullish Coalescing Operator (??): null undefined


let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


////////ternary operator

//condition ? true : false

const hotTeaPrice = 100
hotTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");