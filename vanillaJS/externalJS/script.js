console.log("Hello World!");

let person = {
    //property:value

    firstName: "First Name: Jiezel",
    lastName: "Last Name: Olandag",
    age: "Age: 27", 
    address: "City: Oroquieta City, Misamis Occidental", 
    spouse: null, 
    hobbies: [
        "Cooking", 
        "singing", 
        "Reading Books", 
        "Driving", 
        "Watching C & K-Dramas", 
        "Playing Violin"
    ]
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.address);

function greeting (firstName, lastName) {

    console.log(`${firstName} ${lastName} is 27 years of age.`);

}
greeting ("Jiezel", "Olandag");
console.log(`My hobbies are: Cooking, Singing, Reading Books, Driving Motorcycle, Watching C & K-dramas, and Playing Violin.`);
console.log(``);