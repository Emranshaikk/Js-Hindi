//string interpolation

const name = "Shaik"
const repoCount = "20"

// console.log( name + repoCount + " Value"); (Old Method of writing String)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Shaik-Imran-dot-com')

console.log(gameName [0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);
const newString = gameName.substring(0, 4);
console.log(newString);

const newStringOne = "    Shaik   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(gameName.split('-'));

