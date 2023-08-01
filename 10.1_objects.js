//Two ways to declare a object
//1: object literal (Non singleton)
//2: object constructor (Singleton)

// object literals

const mysym = Symbol("key1")
const JsUser = {
    name: "Shaik",
    "fullName": "Shaik Imran",
    [mysym] : "mykey1",
    age: 18,
    location: "Hyderabad",
    email: "imran@google.com",
    isloggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mysym]);

JsUser.email = "shaik@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "shaik@windows.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

//JsUser.greetingTwo = function(){
//    console.log(`Hello Js user, ${this.name}`);
//}

// Watch the video again to clearify the objects

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());