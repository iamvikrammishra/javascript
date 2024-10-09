// for of loop object pe nhi lgta
//object pe lgta hai for in loop
//for in loop aur bhi jagah lgta hai not only on obj

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python',
    swift: 'swift  by apple'
}
for (const key in myObject) {
    //console.log(key);// print only key
    //console.log(myObject[key]); //print values
    //console.log(`${key} :- ${myObject[key]}`); //print both keys and values


}


/////kya for in loop array pe bhi lg sakti????

const programming = ["js", "rb", "python", "c++"]

for (const key in programming) {
    //console.log(key);// for of loop mai key print krwane se array ki element print ho jaati hai jbki for in loop mai key print hota hai
console.log(programming[key]);
    
}

//array ki bhi keys hoti hai wo o se start hoti hai,,, in array keys is like index no.





///// map pe for in loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
     
}// map ke upper is tarah se iteration nhi kiya jaa sakta 





