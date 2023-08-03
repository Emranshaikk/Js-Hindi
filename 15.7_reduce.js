// shopping cart

const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function (accumulator, currentValue) {
    //console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
   // return accumulator + currentValue
// }, 0 )


//const myTotal = myNums.reduce ((currentValue, accumulator) => accumulator + currentValue, 0 )

const ShoppingCart = [
    {
        itemName : "Js Course",
        itemPrice : 2999
    },
    {
        itemName : "Mobile App Developer",
        itemPrice : 6999
    },
    {
        itemName : "Py",
        itemPrice : 1999
    },
    {
        itemName : "Swift",
        itemPrice : 8999
    },
    {
        itemName : "Cloud Computing",
        itemPrice : 12999
    },
    {
        itemName : "Data Science",
        itemPrice : 14999
    },

]

const PriceToPay = ShoppingCart.reduce((accumulator, item) => accumulator + item.itemPrice, 0)
console.log(PriceToPay);
