
function sayMyName(){
    console.log("I");
    console.log("M");
    console.log("R");
    console.log("A");
    console.log("N");
}

//sayMyName()

//  sayMyName //Reference
//  () // Execution

function AddTwoNumbers(number1, number2) { //parameters ) {
    //console.log(number1+number2);
    
// }

AddTwoNumbers(3,5) // inside this bracket is called arguments

function AddTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    console.log("Hitesh");
}

//** function loginUserMessage(UserName){
    if (UserName === undefined){
        console.log("please enter a Username");
        return
    }
    return `${UserName} just logged in` 
}

// console.log (loginUserMessage()); *//


function loginUserMessage(UserName = "Sam"){
    if (UserName === undefined){
        console.log("please enter a Username");
        return
    }
    return `${UserName} just logged in` 
}

//console.log (loginUserMessage("Hitesh"));

// rest operator and Spread Operator three dots ( ... )

function calculatecartPrice(...num1) {
    return num1
}

// console.log(calculatecartPrice(200, 400, 500));

const user = {
    username : "Hitesh",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username : "Sam",
    price: 499 
})  //passing object

// passing arrays

const mynewArray = [200, 300, 500, 900]

function returnSecondValue(getArray) {
        return getArray[1]
}

//console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 300, 500,900]));