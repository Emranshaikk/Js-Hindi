const marvel_heroes = ["Ironman", "Spiderman", "Thor"]
const Dc_heroes = ["Batman", "Superman", "Flash"]


//console.log(Dc_heroes);

//marvel_heroes.push(Dc_heroes)
//console.log(marvel_heroes[3][1]);

//const allHeroes = marvel_heroes.concat(Dc_heroes)
//console.log(allHeroes);

const allnewheroes = [...marvel_heroes, ...Dc_heroes];
console.log(allnewheroes);


const anotherarray = [2,3,4,5, [6,7,8], 11, [12,13, [14,15]]]
real_anotherarray =   anotherarray.flat(Infinity)
console.log(real_anotherarray);

console.log(Array.isArray("Shaik Imran"));
console.log(Array.from("Shaik Imran"));
console.log(Array.from({name: "hitesh"})); //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


