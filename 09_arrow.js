const user = {
    userName: "Hitesh",
    Price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to the website`);
        //console.log(this);
    }
}
// this command above the function will print both sam and Hitesh

//user.welcomeMessage();
//user.userName = "sam"
//user.welcomeMessage();

// console.log(this);

function chai() {
    //console.log(this);
}
//chai();

// Arrow function = () => {} 
// Variables = (Parameters) => {Values}

// const addTwo = (num1, num2) => {
//    return num1 + num2      
// }
// above is the basic arrow function
// console.log(addTwo(3,4));


//const addTwo = (num1, num2) => num1 + num2
//console.log(addTwo(4,9));

// above function is an implisive return 
// dont use parenthesis {} in this function 
// note : curly braces use hua to return keyword likhna hi padega
// note : explicite return me curly braces use karna padega
// Example

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(4,8));
 // object ko return karne k liye parenthesis lanaga padega//
 // example {username : "Hitesh"} Incorret method
 //        ({username : "Hitesh"}) Correct Method

// syntax learn more about it