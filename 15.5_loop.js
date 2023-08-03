const coding = ["Js", "ruby", "java", "python", "Cpp"]

const values = coding.forEach( (item)  => {
        //console.log(item);
} )

// console.log(values);


// Using filter

const books = [
    {tittle: "Book One", Genre: "Fiction", publish: "1981",
edition: 2004},
    {tittle: "Book Two", Genre: "Non-Fiction", publish: "1988",
edition: 2008},
    {tittle: "Book Three", Genre: "History", publish: "1989",
edition: 2012},
    {tittle: "Book Four", Genre: "Biography", publish: "1991",
edition: 2014},
    {tittle: "Book Five", Genre: "Science", publish: "1998",
edition: 2018},
    {tittle: "Book Six", Genre: "Fiction", publish: "1995",
edition: 2020},
    {tittle: "Book Seven", Genre: "History", publish: "2002",
edition: 2021},
    {tittle: "Book Eight", Genre: "Drama", publish: "1890",
edition: 2022},
    {tittle: "Book Nine", Genre: "Poems", publish: "1999",
edition: 2017},
    {tittle: "Book Ten", Genre: "Drama", publish: "2010",
edition: 2023},
];

const userBooks = books.filter ( (bk) =>bk.Genre === 'History'  )

const userBooks1 = books.filter ( (bk) => {return bk.publish >= 2000})

const userBooks2 = books.filter ((bk) => {
    return bk.publish >= 1995 && bk.Genre === "Fiction"
})
//console.log(userBooks);
console.log(userBooks2);




