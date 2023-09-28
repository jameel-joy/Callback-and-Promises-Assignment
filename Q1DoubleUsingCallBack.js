// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

function dbArr(arr, callback){
    const db = arr.map((num) => {
        return callback(num);
    })
    return db;
}
const arr = [1,2,3,4]

function callback(num){
    return num * 2;
}
const db = dbArr(arr, callback)

// console.log(db);

function dbArr(){
        function callback(arr){
            arr.map((el)=>{
                console.log(el*el);
            })
        }
        callback([1,2,3,4]);
    }
dbArr();