// Day of the Week:
let day = 3;

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number.");
}

// 2. Grade Interpretation:
let letterGrade = "B";

switch (letterGrade) {
    case "A":
        console.log("Excellent! This is a top grade.");
        break;
    case "B":
        console.log("Great job! You're above average.");
        break;
    case "C":
        console.log("Satisfactory performance. You can improve.");
        break;
    case "D":
        console.log("Passing grade, but consider studying more next time.");
        break;
    case "F":
        console.log("You need to put in more effort. Consider retaking the course.");
        break;
    default:
        console.log("Invalid letter grade.");
}

// 3. Navigation Menu:
let userChoice = 2;

switch (userChoice) {
    case 1:
        console.log("You selected option 1.");
        break;
    case 2:
        console.log("You selected option 2.");
        break;
    case 3:
        console.log("You selected option 3.");
        break;
    default:
        console.log("Invalid menu option. Please choose from 1, 2, or 3.");
}
