//const tinderUser = new Object()  //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    fullName : {
        userName : {
            firstName: "Shaik",
            lastName : "Imran"
        }
    }
}

//console.log(regularUser.fullName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

//const obj3 = Object.assign( {}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}

//console.log(obj3);

//user[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor);

// courseInstructor thoda bada naam hai to uska shortform use karne k liye 
//object structure karte hai 

//example : const {courseInstructor: instructor} = course
            //console.log(instructor) 

