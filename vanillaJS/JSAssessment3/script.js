console.log("Exercise 1");

// const Cars = [
// 	{ 
//         Brand: Ford, 
//         Model: Ranger, 
//         Year: 2022, 
//         Color: gray, 
//         Mileage: ,
//         Price: 21,000
//     },
// 	{ 
//         Brand: Hyundai, 
//         Model: Starex, 
//         Year: 71.3, 
//         Color: 76.5, 
//         Mileage: 81.9,
//         Price: 21,000
//     },
// 	{ 
//         Brand: Toyota, 
//         Model: Everest, 
//         Year: 91.4, 
//         Color: 90.7, 
//         Mileage: 85.6,
//         Price: 21,000
//     },
// ];


studentGrades.forEach(student => {
    let gradeSum = 0;
    let gradeCount = 0;

    for (const propertyName in student) {
        if (propertyName !== 'studentId') {
            const grade = student[propertyName];

            gradeSum += grade;

            gradeCount++;
        }
    }
    
    const gradeAverage = gradeSum / gradeCount;

    student.average = +gradeAverage.toFixed(1);
});

console.log(studentGrades);