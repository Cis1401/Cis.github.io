console.log("connected");

//Array
//used to store elements
//it is an ordered collection of values/ elements because of indexes.

//Basic Structures
//elements - square brackets called Array Literals

// How to create a JS arrays?
// 1. Declare and initialize an array
let array = [];

// 2. Using a new keyword + array()
let arr = new Array();

let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// 
// 
// 

console.log(months[5]);
console.log(months[11]);

//
//
console.log(months.length);

// Array Manipulation
let count = ["one", "two", "three", "four"];
// traditional Method is using Assignment Operator (=)

console.log(count[4]);
count[4] = "five";
console.log(count); //adds the elements at the end of an array

// OR by using array
// 

// Push Method - adds an element at the end of an array
count.push("six");
console.log(count);

// using psuh method inside the function
function addElement (element) {
    count.push(element);
    console.log(count);
}

addElement("seven");

// Pop Method - removes an element at the end of an array
count.pop();
console.log(count);

// using pop method inside the function
function removeElement () {
    count.pop();
    console.log(count);
}
removeElement();

// how to add an element at the beginning of an array.
// Unshift method - adds the elements at the biginning of an array
count.unshift("zero");
console.log(count);

// Shift Method - removes an elements at the beginning of an array
count.shift();
console.log(count);

// sort method - ti sorts the arrays from least to greatest but there is a certain limitation.
let nums = [15,32,61,130,230,13,34];
nums.sort();
console.log(nums);
// output sorts first two digits of the number
nums.sort(
    function (a,b)
    {
        //least to greatest or ascending order
        return a-b;

        //greatest to least or descending order
        // return b-a;
    }
);

console.log(nums); 

// reverse method
nums.reverse();
console.log(nums); //it reversed the orders based on the previous output.

// Splice and Spice
// Splice Method 


// first parameter: index where to start omitting the element
// second parameter: number of elements to be omitted
// third parameter: elements to be added or inserted

console.log(count);

let newSplice = count.splice(2);
//it declares two elements at the beginning of an array
console.log(newSplice);
console.log(count);

// Slice Method

let animals = ["tiger", "cat", "rat", "bat", "wolf"]
console.log(animals);

let newSlice = animals.slice(2);
//it removes the first two elements
console.log(newSlice);
console.log(animals); //it displays all the elements even that was removed from slice() method.

newSlice = animals.slice(1,2);
//deletes specified elements from index 1 then return the remaining elements in the new array newSlice.
console.log(newSlice);

//concat method - ti merges 2 or more arrays together.

console.log(animals);
console.log(count);

let newConcat = animals.concat(count);
console.log(newConcat);

//Join Method

let meal = ["chicken", "sisig", "pizza"];

let newJoin = meal.join();
console.log(newJoin); //it converts array into string

newJoin = meal.join("");
console.log(newJoin);

newJoin = meal.join(" ");
console.log(newJoin);

newJoin = meal.join(", ")
console.log(newJoin);

// toString method - it returns a string representing array and its elements.

let elements = ["b", "a", "d", 8, 5, "e"];
console.log(elements);
console.log(typeof elements[2]);

let newString = elements.toString();
console.log(newString);

//Accessor Method - these are methods that return a new value of representation.

//indexOf()
// lastIndexOf()

let countries = ["US", "PH", "CAN", "THAI", "PH", "SG", "HK", "PH"]

//lastindexOf() - it finds the last index of a given element.
let index = countries.lastIndexOf("PH");
console.log(index);

//indexOf() - it finds the first index of a given element.
let index1 = countries.indexOf("PH");
console.log(index1);

