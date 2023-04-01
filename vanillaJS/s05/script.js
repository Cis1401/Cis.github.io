console.log("connected");

//Nested If
// function oddOrEven (num) {
//     if (isNaN (num) || typeof parseInt(num) !=="number") 
//     //determines whether a value is Nan (Not a number) or a number
//     {
//         return `Unexpected Input`;
//     }
//     else if (num == ``){
//         return "Please input inside the box"
//     }
//     else {
//         if (num % 2 == 0)
//         {
//             return ("even number")
//         }
//         else {
//             return ("odd number")
//         }
//     }
// }

// let userInput = prompt  ("Give me a number");
// console.log(oddOrEven(userInput));

// Nested Loops
// it composed of outer loop and inner loop

/*
    SYNTAX:
    // outer loop
    for (init; condition; increment/decrement)
    {
        // statement
        // inner loop
        for (init; condition; increment/decrement){
            // statement of inner loop
        }

        // statement
    }
*/

// for (let i = 0; i <= 2 ; i++) {
//     console.log("-outer loop");

//     for (let j = 0; j <= 3; j++)
//     {
//         console.log("--inner loop");
//     }
// }

// let i = 0;
// while (i <= 2) {
//     console.log("-outer loop");
//     i++;

//     let j=0;
//     while (j <=3)
//     {
//         console.log("--inner loop");
//         j++;
//     }
// }

// function multiplyAll (arr)
// {
//     let product = 1;

//     for (let i=0; i <arr.length; i++)
//     {
//         for (let j=0; j < arr[i].length; j++)
//         {
//             product *= arr[i][j];
//         }
//     }

//     console.log(product);
//     return product
// }

// // invoke the function
// multiplyAll([[2,5],[9,10],[11,17,20]]);

// SOLUTION
// const name = ["Karen", "Marites", "Marisol"];

// //outer loop
// for (let i = 0; i <name.length; i++)
// {
//     console.log(`My name is ${name[i]}`);
    
//     for (let j = 0; j <name[i].length; j++)
//     {
//         console.log(`spells ${name[i][j]}`);
//     }
// }

// let i = 0;
// while (i <= 0) {
//     console.log("My name is Jiezel");
//     i++;

//     let j=0;
//     while (j <=0)
//     {
//         console.log("Spell J");
//         j++;
//     }

//     {
//         console.log("Spell I");
//         j++;
//     }

//     {
//         console.log("Spell E");
//         j++;
//     }

//     {
//         console.log("Spell Z");
//         j++;
//     }

//     {
//         console.log("Spell E");
//         j++;
//     }

//     {
//         console.log("Spell L");
//         j++;
//     }
// }

// let l = 0;
// while (l <= 0) {
//     console.log("My name is Marites");
//     l++;

//     let s=0;
//     while (s <=0)

//     {
//         console.log("Spell M");
//         s++;
//     }

//     {
//         console.log("Spell A");
//         s++;
//     }

//     {
//         console.log("Spell R");
//         s++;
//     }

//     {
//         console.log("Spell I");
//         s++;
//     }

//     {
//         console.log("Spell T");
//         s++;
//     }

//     {
//         console.log("Spell E");
//         s++;
//     }

//     {
//         console.log("Spell S");
//         s++;
//     }
// }

// let a = 0;
// while (a <= 0) {
//     console.log("My name is Marisol");
//     a++;

//     let f=0;
//     while (f <=0)

//     {
//         console.log("Spell M");
//         f++;
//     }

//     {
//         console.log("Spell A");
//         f++;
//     }

//     {
//         console.log("Spell R");
//         f++;
//     }

//     {
//         console.log("Spell I");
//         f++;
//     }

//     {
//         console.log("Spell S");
//         f++;
//     }

//     {
//         console.log("Spell O");
//         f++;
//     }

//     {
//         console.log("Spell L");
//         f++;
//     }
// }