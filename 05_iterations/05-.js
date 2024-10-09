/////for each loop maximum tym use mai aati hai

const coding = ["js", "cpp", "python", "swift", "ruby"]

/*coding.forEach( function (item) {
console.log(item);
})
*/
// foreach bolta hai callback function do (function name(){})
// because ye call back hai to iska naam nhi hota hai (function (){})
// kyunki ye function  array ke andr chal rha hai to  ye jo value hogi apne aap parameter ki tarah value leke aayegi ab usko vaiue boliye val boliye item boliye as your wish


// arrow function ke tarika se bhi likh sakte hai foreach function

//coding.forEach( (item) => {
//    console.log(item);
//} )


// print me function 
/*
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
*/



//item index arr

/*
coding.forEach((item, index, arr) =>{
    console.log(item, index, arr);
})
*/



///[{}, {}, {}]
// ek array ke andr multiple obj bala senario
//iss tarah ke senario mai foreach ka bhut use hota hai

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})

//database se jo value aati hai wo array 
//ke form mai aati hai aur hrr ek value  object hi hoti hai




