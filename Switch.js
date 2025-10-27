//Qn 1

let num1 = 10;
let num2 = 5;
let choice = 1;

console.log("Select operation:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

let result;

switch (choice) {
  case 1:
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    
  case 2:
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;
  case 3:
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    break;
  case 4:
    if (num2 === 0) {
      console.log("Cannot divide by zero");
    } else {
      result = num1 / num2;
      console.log(`${num1} / ${num2} = ${result}`);
    }
    break;
  default:
    console.log("Invalid choice");
}
//Qn 2
function getMonths(num) {
  switch (num) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Invalid number");
  }
}
getMonths(1);
//Qn 3
function checkDay(num) {
  switch (num) {
    case 1:
      console.log("Weekday");
      break;
    case 2:
      console.log("Weekday");
      break;
    case 3:
      console.log("Weekday");
      break;
    case 4:
      console.log("Weekday");
      break;
    case 5:
      console.log("Weekday");
      break;
    case 6:
      console.log("Weekend");
      break;
    case 7:
      console.log("Weekend");
      break;
    default:
      console.log("Invalid number");
  }
}
checkDay(3);
//Qn 4
function convert(grade) {
  let gpa;
  switch (grade) {
    case "A":
      gpa = 4.0;
      console.log("GPA:", gpa);
      break;
    case "B":
      gpa = 3.0;
      console.log("GPA:", gpa);
      break;
    case "C":
      gpa = 2.0;
      console.log("GPA:", gpa);
      break;
    case "D":
      gpa = 1.0;
      console.log("GPA:", gpa);
      break;
    case "F":
      gpa = 0.0;
      console.log("GPA:", gpa);
      break;
    default:
      gpa = "Invalid grade";
  }
}
convert('A')
//Qn 5
function banking(operations){
    console.log('Banking Operation');
    switch(operations){
        case 1:
            console.log('Withdraw');
            break;
        case 2:
            console.log('Deposit');
            break;
        case 3:
            console.log('Check Balance');
            break;
             default:
        console.log('Invalid operation');   
    }
}
banking(2)

//Qn 6
function convertCurrency(amount, currency) {
  let result;

  switch (currency.toUpperCase()) {
    case "USD":
      result = amount * 1270;
      console.log(result + " RWF");
      break;
    case "EUR":
      result = amount * 1370;
      console.log(result + " RWF");
      break;
    case "GBP":
      result = amount * 1600;
      console.log(result + " RWF");
      break;
    default:
      console.log("Unsupported currency");
  }
}
convertCurrency(145, "USD");
convertCurrency(2, "EUR");
convertCurrency(29, "GBP");

//Qn 7

function weather(messages){
    console.log('Weather messages');
    switch(messages){
        case 1:
            console.log('Sunny');
            break;
        case 2:
            console.log('Rainy');
            break;
        case 3:
            console.log('Cloudy');
            break;
            case 4:
            console.log('Snowly');
            break;
             default:
        console.log('Invalid message');   
    }
}
weather(2)

//Qn 8

function musicPlayer(choice) {
  switch (choice) {
    case 1:
      console.log("Play music");
      break;
    case 2:
      console.log("Music paused");
      break;
    case 3:
      console.log("Music stopped");
      break;
    case 4:
      console.log("Play next track");
      break;
    case 5:
      console.log("Play previous track");
      break;
    default:
      console.log("Invalid choice.");
  }
}
musicPlayer(2)
//Qn 9

function checkSeason(month) {
  let season;

  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      season = "Autumn";
      break;
    default:
      season = "Invalid month number";
  }

  console.log("Season:", season);
}
checkSeason(3); 

//Qn 10

function sound(animal){
    switch(animal){
        case 'dog':
            console.log(animal,':','Bark');
            break;
        case 'cat':
            console.log(animal,':','Muew');
            break;
        case 'cow':
            console.log(animal,':',':Moo');
            break;
        default:
            console.log('Invalid animal');

    }
}
sound('dog')
//Qn 11

function checkAccess(role) {
  switch (role) {
    case 'admin':
      console.log("Access granted: Full control(Admin)");
      break;
    case 'user':
      console.log("Access granted: Limited control(User)");
      break;
    case 'guest':
      console.log("Access granted: View only(Guest)");
      break;
    default:
      console.log("Access denied: Invalid role.");
  }
}


checkAccess("admin");  

//Qn 12

function getFare(vehicleType) {
  switch (vehicleType) {
    case 'car':
      console.log("Fare range: 10,000 - 20,000 RWF");
      break;
    case 'bike':
      console.log("Fare range: 100 - 1,000 RWF");
      break;
    case 'bus':
      console.log("Fare range: 700 - 5,000 RWF");
      break;
    case 'truck':
      console.log("Fare range: 20,000 - 30,000 RWF");
      break;
    default:
      console.log("Unknown vehicle type");
  }
}

getFare('car');

//Qn 13

function getZodiacSign(number) {
  let sign;

  switch (number) {
    case 1:
      sign = "Aries";
      break;
    case 2:
      sign = "Taurus";
      break;
    case 3:
      sign = "Gemini";
      break;
    case 4:
      sign = "Cancer";
      break;
    case 5:
      sign = "Leo";
      break;
    case 6:
      sign = "Virgo";
      break;
    case 7:
      sign = "Libra";
      break;
    case 8:
      sign = "Scorpio";
      break;
    case 9:
      sign = "Sagittarius";
      break;
    case 10:
      sign = "Capricorn";
      break;
    case 11:
      sign = "Aquarius";
      break;
    case 12:
      sign = "Pisces";
      break;
    default:
      sign = "Invalid sign";
  }

  console.log("Zodiac Sign:", sign);
}
getZodiacSign(10)

//Qn 14

function getAreaFormula(shape) {
  switch (shape) {
    case "circle":
      console.log("Area of Circle = π*r²");
      break;
    case "square":
      console.log("Area of Square = side*side");
      break;
    case "rectangle":
      console.log("Area of Rectangle = length*width");
      break;
    case "triangle":
      console.log("Area of Triangle = (base*height) / 2");
      break;
    default:
      console.log("Unknown shape");
  }
}
getAreaFormula("circle");

//Qn 15

function quote(number) {
  switch (number) {
    case 1:
      console.log("“Believe you can and you're halfway there.”");
      break;
    case 2:
      console.log("“Don't watch the clock; do what it does. Keep going.”");
      break;
    case 3:
      console.log("“Push yourself, because no one else is going to do it for you.”");
      break;
    case 4:
      console.log("“The harder you work for something, the greater you'll feel when you achieve it.”");
      break;
    case 5:
      console.log("“Success doesn't come from what you do occasionally, it comes from what you do consistently.”");
      break;
    default:
      console.log("Invalid number. Please enter a number from 1 to 5.");
  }
}

quote(1);




