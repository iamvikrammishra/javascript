const name = "vikram "
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//recomended concatination

const gameName = new String('vikramkkk')
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.indexOf());

console.log(gameName.charAt(3));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0,5) //yha 0 se 4 index tk ki value leta 5th exciuded hai
console.log(newString);

const anotherString = gameName.slice(-8, 4)// -ve value only slice ke andr hi use kr sakte hai

console.log(anotherString);


// trim starting and ending space ko remove kr deta hai

const newStringOne = "  vikram  "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace

const url = "https://vikram.com/vikram%20mishra"

console.log(url.replace('20', '-'));

console.log(url.includes("manikant"));// include shows url ke andr wo string hai yaa nhi







