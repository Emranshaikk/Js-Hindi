// Immediate Invoked Function Expressions (IIFE)

 // Name IIFE
(function chai (){
    console.log(`DB CONNECTED`);
})();

// Second Method 

(  function aurCode (){
    console.log(`DB CONNECTED TWO`);
} )()




// Global Scope k pollution se problem hoti hai 
//kahi baar scope variable ko hatane k liye IIFE ka use hota hai