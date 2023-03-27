console.log("connected")

//JS Operators - symbols used to manipulate values/operands.
//it is used to perform specific mathematical and logical computations in operands.

//Assignment Operators (=)
//let - can be reasigned but cannot re-declared

let a = 14;
a = 18;

console.log(a)

let b = a;
console.log (b);

//Arithmetic Operators - performs mathematical operation on numerical values/operands and returns a single numerical value.

//Addition
console.log(20+30); // it displays the sum which is a number/integer
console.log("20"+"30"); // 2030 - concatenation - it links 2 strings together.
//string concatenation

//Subtraction (-)
console.log(20-10); // 10 - integer/number
console.log("20"-"10"); //10 - type coercion - automatic/implicit conversion of values from one data type to another

let val1 = 50;
let val2 ="30";
let diff = val1 - val2;
console.log(diff);

console.log ("twenty" - "ten"); //NaN - not a number

//Multiplication (*)

console.log(10*5);
console.log("10" * 5); //coercion

//Division (/)

console.log(50/5); //integir
console.log("50" / 5);

//Modulo (%) - remainder
console.log(100 % 3); //1 - number
console.log("100" % 3); //coercion

//Increment (++) and Decrement (--)

let c = 30;
console.log (++c); //increased by 1
console.log (c); //31
console.log (--c); // 30 => decreased by 1
console.log (c);

//if operator comes first (++ and --) it perfoms arithmetic operations before displaying the result

console.log(c++);
console.log(c);
console.log(c--);
console.log(c);

//if operant (variable) comes first before the operator (++ and --) it displays the value of the operand before performing arithmetic operations

//perfom arithmetic operaton on two numbers
console.log("81" / 9);

//perform arithmetic operation on two variables with numerical values
console.log (c - 15);

//Multiply a number to the difference of two numbers
console.log (58 / (4 * 5) + 32);

//Compound Assignment Operators - shorthand for arithmetic and assignment operators.
//performs mathematical operation first then assigning the result back to the variable.

//Long method:
let j = 15;
console.log (j+3);
console.log(j);

//Addition-Assignment Operator (+=)
let i = 15;
console.log(i += 3);

//Substraction-Assignment Operations
console.log(i -= 10); //8 wherein 18 is the final value of addition-assignment operator

//Multiplication-Assignment Operator (*=)
console.log(i *= 5);

//Division-Assignment Operation
console.log(i /= 2); //20

