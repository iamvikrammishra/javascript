const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // merge both the arrays and 0th element "thor"
//1st element "ironman"  2nd element "spiderman" 3rd element ["superman", "flash", "batman"]

//console.log(marvel_heros);

//console.log(marvel_heros[3]);


//console.log(marvel_heros[3][1]); //third element mai first element

marvel_heros.concat(dc_heros)

//console.log(marvel_heros);

//console.log(marvel_heros[3]);3

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

//another array

const another_array = [1, 2, 3, [4, 5,6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array);

console.log(Array.isArray("vikram"))
console.log(Array.from("vikram"))
console.log(Array.from({name: "vikram"}))  // intresting case for interviews
// keys kaa array banau yaaa values kaaa wo hme dena prega isss case mai ye [] return kr dega

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
















