//array
const myArr =[10, 11, 2 ,  13, 4, 15]

const myHeros = ["shaktiman", "nagraj", "sunny"]

const myArr2 = new Array(121,222,23,24,15)
console.log(myArr2[1]);

//Array ,methods

myArr.push(6)
//myArr.push(7)
//myArr.pop() //last value remove from array

//myArr.unshift(9) //array ke start mi insert hota hai

//myArr.shift() // first value gayab from array

console.log(myArr.includes(9));

//console.log(myArr.indexOf(10));

const newArr = myArr.join()
//console.log(myArr);
//console.log( newArr);// join array ko bind krta hai aur string mai convert kr deta hai


//slice vs splice
//last range excuded
//last range included but this is not main  difference


//console.log("A ", myArr);


const myn1 = myArr.slice(1, 3)

//console.log(myn1);
//console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
//console.log("C", myArr);

//console.log(myn2);




