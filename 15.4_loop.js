// for each
// higher order function
const coding = ["javascript", "python", "ruby", "golang", "cpp"]
coding.forEach(function (item) {
    //console.log(item);
})

// arrow function

coding.forEach((item) => {
    //console.log(item);
})

function printMe(item) {
    //console.log(item);
    
}
coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    //console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Golang",
        languageFileName: "Go"
    },
    {
        languageName: "Java",
        languageFileName: "Jv"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "Cpp"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
} )
myCoding.forEach((item) => {
    //console.log(item.languageName);
} )








