console.log ("connected")

//Selection Control Structure

//If statements - conditional branching statement
//condition is true, a group of statement is executed
//condition is false, the statement is skipped

/*
    SYNTAX:
    if (condition)
    {
        //statement1
        //statement2
    }

*/

if (50 <= 30) {
    console.log("not allowed to enter");
}
let age = prompt ("Enter your age");

function getAge (age) {
    if (age <= 30)
    {
        console.log("You are not allowed");
    }

    return age
}

getAge (age);

//If - else Statement
//2 way decision statement
//it is used to make decisions and execute commands conditionally

/*
    SYNTAX:
    if (condition)
    {
        statement 1
    }
    else {
        //statement 2
    }
*/

let myAge = 30;

if (myAge === 30) {
    alert("hello from the codeblock");
}
else {
    console.log ("haler sa aming bloke");
}