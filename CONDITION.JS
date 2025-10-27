//Conditional Statements

let num;
let grade;

grade=57;
num=5;
//Qn 1
if (num % 2===0) {
    console.log(num,"is an even number")
    
}else{
   console.log(num,"is an odd number")
}
//Qn 2
if (grade >= 80) {
    console.log("Grade: A");
  } else if (grade >= 60 && grade < 80) {
    console.log("Grade: B");
  } else if (grade >= 40 && grade < 60) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }

  //Qn 3
  let n1=12
  let n2=23
  let n3=34


  if (n1>n2 && n1>n3) {
    console.log(n1,'is the largest');
  } else if(n2>n1 && n2>n3){
    console.log(n2,'is the largest');
  } else {
       console.log(n3,'is the largest');
  }
//Qn 4
  let age;
    age=6
  if (age <= 13) {
    console.log("Child");
  } else if (age >13 && age < 19) {
    console.log(" Teenager");
  } else if (age >20 && age < 64) {
    console.log("Adult");
  } else if (age >=65) {
    console.log("Senior");
  } 

  //    Qn 5
  let number;
  number=-12
   if (number > 0) {
    console.log("Positive");
  } else if (number<0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
  




  //Switch statements
//Qn 1
  function getDayOfWeek(num) {
  switch(num) {
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
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid number");
  }
}
getDayOfWeek(14)

//Qn 2
function calculate(num1, num2, operator) {
  switch(operator) {
    case '+':
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case '-':
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case '*':
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case '/':
      if (num2 !== 0) {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
      } else {
        console.log("Error: Division by zero is not allowed.");
      }
      break;
    default:
      console.log("Invalid operator. Please use +, -, *, or /");
  }
}

calculate(10,15,"+")

//Qn 3
function traffic(light){
    switch(light){
        case 'red':
            console.log('Stop');
            break;
        case 'yellow':
            console.log('Ready');
            break;
        case 'green':
            console.log('Go');
            break;
             default:
        console.log('Invalid Traffic Light');   
    }
}
traffic('blue')

//Qn 4
function fruitsPrice(fruits){
    switch(fruits){
        case 'apple':
            console.log('500frw');
            break;
        case 'banana':
            console.log('550frw');
            break;
        case 'orange':
            console.log('700frw');
            break;
        case 'grapes':
            console.log('750frw');
            break;
             default:
        console.log('Invalid fruit');   
    }
}
fruitsPrice('banana')

//Qn 5

function gradeFeedback(grades){
    switch(grades){
        case 'A':
            console.log('Excellent');
            break;
        case 'B':
            console.log('Very Good');
            break;
        case 'C':
            console.log('Good');
            break;
        case 'D':
            console.log('Fail');
            break;
             default:
        console.log('Invalid Grade');   
    }
}
gradeFeedback('B')


