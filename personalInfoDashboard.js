//THE TASK

// firstName: string — your first name
// lastName: string — your last name
// birthYear: number — your birth year
// currentYear: number — this year (2025)
// isStudent: boolean — true or false
// hobbies: array of at least 3 strings
// contact: object with keys email, phone, city


//MY SOLUTION

const firstName = "Gevorg";
const lastName = "Arzakanyan";
const birthYear = 2002;

let currentYear = 2025;
let isStudent = true;
let hobbies = ["history", "visual art", "struggling"]
let contact = { email: "gevorg@gmail.com", phone: "+374 33 33 33", city: "Erevan" };




//THE TASK

//Log the following sentences
// “Hi, my name is {firstName} {lastName}. I live in {city}.”
// “I am {currentYear - birthYear} years old and currently {isStudent ? "a student" : "not a student"}.”


//MY SOLUTION

console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}`);
console.log(`I am ${currentYear - birthYear} years old and currently ${isStudent ? "a student" : "not a student"}.`);






//THE TASK

// Type Coercion & Comparison
// Add two variables:
// ageString = "25"(string)
// ageNumber = 25(number)
// Use both == and === to compare them and log the results
// Log the data types of both variables.


//MY SOLUTION

let ageString = "25";

let ageNumber = 25;

console.log(ageNumber == ageString)

console.log(ageNumber === ageString)





//THE TASK

// Create a variable score (number between 0 and 100).
// Write an if...else if...else block to print:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: below 6

//MY SOLUTION

const num = 74;

if (num >= 90) {
    console.log(num);
}
else if (num >= 80) {
    console.log(num);
}
else if (num >= 70) {
    console.log(num);
}
else if (num >= 60) {
    console.log(num);
}
else if (num < 6) {
    console.log(num);
}




//THE TASK

//Use a switch statement to print a message based on the grade:
// A → “Excellent work!”
// B → “Good job!”
// C → “Keep improving.”
// D → “Try harder.”
// F → “Needs serious effort.”


// Use a ternary operator to print:
// “You passed.” if grade is C or above
// Otherwise, “You failed.”



//MY SOLUTION


let grade = "A"

switch (grade){
    case "A":
        console.log("Excellent work!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Keep improving.");
        break;
    case "D":
        console.log("Try harder.");
        break;
    case "F":
        console.log("Needs serious effort.");
}



// AND THE LAST TASK

// Use a ternary operator to print:
// “You passed.” if grade is C or above
// Otherwise, “You failed.”


// AND MY SOLUTION

(grade === "A" || grade === "B" || grade === "C") ? console.log("You passed.") : console.log("You failed.");







