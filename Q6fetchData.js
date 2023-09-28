// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = response.json();
    console.log(data);
}
fetchData();

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    const data = response.json()
    console.log(data);
})
.catch((err)=>console.log(err))

.finally(()=> {
    console.log("I am Finally");
})