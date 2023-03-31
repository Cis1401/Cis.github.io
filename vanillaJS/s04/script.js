console.log ("connected");

//for Loops - repeats a block of coede as long as a certain condition is met.
// it is used to execute a block of code for certain numberof times.

/*
    SYNTAX:
    for (initializing; condition; icrement) - these three are what we call params (parameters)
    {
        //block of code
    }
    USAGES:
    1. initialization - initialize the counter variables and evaluated once unconditionally before the first execution of the loop body.

    2. condition - evaluated at the beginning of each iteration.
        - if true, the loop statements execute
        -if false, execution of the loop ends
    
    3. increment - updates the loop counter with a new value each time the loop runs.
*/

for (let i = 0; i <= 5; i++)
{
    console.log(`This is number ${i}`);
}

//if the condition is <= 5 it displays the output from 0 to 5
//if the condition is < 5 it will display the output from 0 to 4

let herName = "Lady Ada Augusta Byron King";
console.log(herName.length);
console.log(herName[6]); //d
console.log(herName[13]); //s

let letter = 0;

for (letter; letter<herName.length; letter++)
{
    console.log(herName[letter]);
}

let fruits = ["guava", "mangosteen", "santol", "durian"]
console.log(fruits);
fruits [4] = "banana";
fruits [5] = "strawberry";
console.log(fruits.length); //6

let index = 0;
for (index; index<fruits.length; index++)
{
    console.log(fruits[index]);
}

let cars = [
    {
        brand: "Volkswagen",
        type: "SUV"
    },

    {
        brand: "Toyota",
        type: "Sedan"
    },

    {
        brand: "Rolls Royce",
        type: "Phantom"
    }
];

let x = 0;

for (x; x<cars.length; x++)
{
    console.log(cars[x]); //it dispalys the object properties such as brand and its type
    console.log(cars[x].brand); //brand printed
    console.log(cars[x].type); //it displays the property called types
}

//whie loop starts by evaluating condition
//if true, code block gets executed.
//if false, code block not executed and it terminates the loop

/*
    SYNTAX:
    while (condition)
    {
        //statement
    }
*/

let count = 0;
while (count <=5) {
    console.log(count);
    count++
}

let i = 0;
while (i <= 6)
{
    console.log(i);
    i++
}