// 1.
console.log("Hello World!");

let person = {
    //property:value

    firstName: "First Name: Jiezel",
    lastName: "Last Name: Olandag",
    age: "Age: 27", 
    workAddress: "",
    city: "City: Oroquieta City, Misamis Occidental",
    houseNumber: "04",
    state: "Phillipines",
    street: "Enerio Street",
    hobbies: [
        "Cooking", 
        "singing", 
        "Reading Books", 
        "Driving", 
        "Watching C & K-Dramas", 
        "Playing Violin"
    ]
}

function greeting (firstName, lastName) {
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.age);
    console.log(person.address);
}

function greeting (firstName, lastName) {

    console.log(`${firstName} ${lastName} is 27 years of age.`);

}
greeting ("Jiezel", "Olandag");
console.log(`My hobbies are: Cooking, Singing, Reading Books, Driving Motorcycle, Watching C & K-dramas, and Playing Violin.`);
console.log(``);



// 2.
let j = 15;
console.log (j+3); //18
console.log(j); //15



let i = 27;
console.log(i += 3); //30
console.log(i -= 25); //5
console.log(i *= 5); //25

console.log(25 >= 25); //Expected output: true
console.log(75 <= 75); 

console.log('hello' != 'hello');
// Expected output: false
console.log(0 != false);
// Expected output: false

// 3.

// let color = prompt ("Choose a color (black, violet and pink)");
// switch (color) 
// {
//     case (color = "Black"):
//     case (color = "black"):
//         console.log("Black");
//         break;

//     case (color = "Violet"):
//     case (color = "violet"):
//         console.log("Violet");
//         break;

//     case (color = "Pink"):
//     case (color = "pink"):
//         console.log("Pink");
        
// }

// 4.)

// function oddOrEven (num) {
//     if (isNaN (num) || typeof parseInt(num) !=="number") 
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
// 5 - is odd number
// 10 - is even number
// "8" - is unexpected input
// "20" - is unexpected input
// "seven" is unexpected input
// "fifteen" is unexpected input
// true is unexpected input


// 5.)

for (let n = 0; n <= 20; n++ )
{
    if (n % 2 == 0)
    {
    console.log (`Even number ${n}`);
    }
    else {
        console.log (`Odd number ${n}`)
    }
}

// 6.)






// 7.)


for (int m = 0; i < (document.forms[0].length) m++);
    if (document.forms[0].elements[m].type == "text")
    {
        console.log (document.forms[0].elements[m].value = "someUsername");
        break;
    }
for (int m = 0; m < document.forms[0].length; i++)
    if(document.forms[0].elements[m].type == "password")
    {
        console.log(document.forms[0].elements[m].value = "somePassword");
        break;
    }   
document.forms[0].submit();