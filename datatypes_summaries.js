// premitive
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

//* 1) Primitive Datatypes
//       Number => number
//       String  => string
//       Boolean  => boolean
//       null  => object
//       undefined  =>  undefined
//       Symbol  =>  symbol
//       BigInt  =>  bigint

//2) Non-primitive Datatypes
//  Arrays  =>  object
//    Function  =>  function
 //      Object  =>  object *//

const score = 100
const scoreValue = 100.3

const isLoggedIn = false    
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId);

//const bigNumber = 3443443443443n


// Reference Type (Non Premitive)

// Array, Object, Functions.

const heroes = ["Shaktiman", "Naagraj", "Doga"] //Array//

let myObject = {
    name: "Shaik",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);


