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

// if (50 <= 30) {
//     console.log("not allowed to enter");
// }
// let age = prompt ("Enter your age");

// function getAge (age) {
//     if (age <= 30)
//     {
//         console.log("You are not allowed");
//     }

//     return age
// }

// getAge (age);

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

// let myAge = 75;

// if (myAge === 30) {
//     alert("hello from the codeblock");
// }
// else {
//     console.log ("haler sa aming bloke");
// }




// let height = prompt ("Enter your height in cm");

// function humanHeight (height) {
//     if (height <= 150) {
// 	console.log ("Did not pass the minimum height requirement");
//     }

//     else {
// 	console.log ("Pass the minimum requirment");

//     }

// }

// humanHeight(height);






// Else if - 2 or more possible outcomes

// Syntax

/*
    if (condition)
    {
        //statement 1
    } else if (condition) {
        // statement 2
    } else {
        statment 3
    }
*/

// let speed = prompt ("Enter the Wind Speed")

// function windSpeed (speed)
//     if (speed <= 30)
//     {
//         console.log ("not a typhoon");
//     }
    
//     else if ((speed <= 61) && (speed <= 88)) {
//         console.log("Tropical depression is detected");
//     } 
    
//     else if ((speed <= 89) && (speed <= 117)) {
//         console.log ("Tropical storm is detected");
//     } 
    
//     else if ((speed <= 61) && (speed <= 88)) {
//         console.log ("Severe Tropical is detected");
//     } 
    
//     else if (others) {
//         alert("Typhoon detected");
//     }

// tIntensity(intensity);









//switch Statement - used to perform different actions on different conditions
// compare the same expression to several different values.

// RULE OF THUMB
/*
    YOU CAN USE THIS STATEMENT WHEN YOU ARE COMPARING
    A LISTS OF VALUES AGAINST A SINGLE VARIABLE
*/

/*
    SYNTAX:
    Switch (expression) {
        case (condition) 1:
            // statements
            // break; stops the execution inside the switch block
        case (condition) 2:
            // statements
            // break
            .
            .
            .
            .
        default:
            // statement
            specifies the code to run if there is no match
    }
*/

// let day = prompt ("Enter a number between 1 to 7");

// switch (day)
// {
//     case (day = "1"):
//         console.log("Monday");
//         break;
    
//     case (day = "2"):
//         console.log("Tuesday");
//         break;

//     case (day = "3"):
//         console.log("Wednesday");
//         break;

//     case (day = "4"):
//         console.log("Thursday");
//         break;
    
//     case (day = "5"):
//         console.log("Friday");
//         break;
    
//     case (day = "6"):
//         console.log("Saturday")
//         break;

//     case (day = "7"):
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Weekday")
// }