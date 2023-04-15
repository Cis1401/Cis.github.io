// Create a Student List
console.log("Hello World!");

let students = ["John", "Jane", "Joe"];
let section = ["Section A"]
const [student1, student2, student3] = students;
const greeting = () => {
    console.log(`${student1} is added to the student's list`);
    console.log(`${student2} is added to the student's list`);
    console.log(`${student3} is added to the student's list`);
    console.log(`There are total number of 3 students in the student's list`);
}
greeting();

console.log("=======================");

// Display Student's Name

console.log(student2);
console.log(student3);
console.log(student1);

console.log("=======================");

// Validate if Joe is an Enrollee.
let i = 2
while (i !=0)
{
    let studentName = "Joe"
    let student = prompt ("Search a student");

    if(studentName ) {
        i = 2-i
        alert("Joe is an Enrollee.")
        break;
    }

    else {
        i = i-1
        alert ("Login Failed. Wrong Credentials");
        console.log(studentName);
    }
};

// Students showing their class section.


// A student is removed from the list then the remaining students are displayed.
students.reverse();
let newSplice = students.splice(1);
function removeStudent () {
    console.log(`${students} was removed from the student's list`);
}
removeStudent();
console.log(newSplice);

console.log("=======================");
// Array of Objects
const studentGrades = [
	{ studentId: 1, Q1: 89.3, Q2: 91.2, Q3: 93.3, Q4: 89.8 },
	{ studentId: 2, Q1: 69.2, Q2: 71.3, Q3: 76.5, Q4: 81.9 },
	{ studentId: 3, Q1: 95.7, Q2: 91.4, Q3: 90.7, Q4: 85.6 },
	{ studentId: 4, Q1: 86.9, Q2: 74.5, Q3: 83.3, Q4: 86.1 },
	{ studentId: 5, Q1: 70.9, Q2: 73.8, Q3: 80.2, Q4: 81.8 }
];
for (let i = 0; i<studentGrades.length; i++)
{
    //compute the element average
    let forLoopAve = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4)/4
    console.log(forLoopAve);
    
    //add aveProperty in each object
    studentGrades[i].forLoopAve = parseFloat(forLoopAve.toFixed(2));
}
console.log(studentGrades);

console.log("=======================");
// Round off the average into a single decimal number.
let people = [
    {
        name: 'John',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Jane',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Bob',
        age: 40,
        gender: 'male'
    },
];
console.log();

// Add a new person object to the people array.
