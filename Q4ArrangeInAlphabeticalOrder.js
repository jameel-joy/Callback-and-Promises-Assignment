// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

const books = [
    {
        title: "ss",
        author: "hasan",
        year: 2002

    },
    {
        title: "v",
        author: "hasan",
        year: 2002

    },
    {
        title: "o",
        author: "hasan",
        year: 2002

    },
]

function extractTitle (books, logtitle) {
    const title = books.map((books)=> books.title)
    
    logtitle(title)
}
function logtitle(title){
    console.log(title.sort());
}

extractTitle(books, logtitle)


function joy(book, callback){
    const ok = book.map((book)=> book.tit)

    callback(ok)
}
function callback(ok){
    console.log(ok.sort());
}
const book = [
    {tit: "ss"},
    {tit: "as"},
    {tit: "os"}
]

joy(book, callback)