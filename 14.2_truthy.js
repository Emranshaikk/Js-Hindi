const userEmail = ""

if(userEmail){
   // console.log("got user email id");
} else {
    //console.log("dont have user email id");
}

// and operator and aur operator && ||
// Falsy values

// false, 0, -0, BigInt 0n, "", null, Undefined, NAN.

// Truthy Values
// "0", "false", " ", [], {}, function(){},

// Method of checking array


if(userEmail.length === 0) {
    //console.log("Array is empty");
}

//const emptyObj = {}

//if (Object.keys(emptyObj).length === 0){
   // console.log("Object is empty");
//}


// nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = undefined ?? 15

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); 
