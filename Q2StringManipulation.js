// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.

function manipulateString(str, logString){
    const ans = str.toUpperCase();

    logString(ans)
}
function logString(ans){
    console.log(`The Manipulating String is : ${ans}`);
}

manipulateString("Hello World" , logString);
