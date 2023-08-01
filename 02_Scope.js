
// {} Object Declaration
// {} Scope 
// {} Block Scope
// {} Global Scope
// {} Nested Scope

 let a = 300
if (true) {
let a = 10
const b = 20
//console.log("INNER: ",a);

}


//console.log(a);
//console.log(b);
//console.log(c);

// Nested Scope

function one () {
    const username = "hitesh"

    function two () {
        const website = "youtube"
        //console.log(username);
    }
    two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}



/// ============== interesting ============= ///

console.log(addone(5))

function addone (num) {
    return num + 1
}


console.log(addtwo(5))
const addtwo = function (num) {
    return num + 2
}

