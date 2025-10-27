let username;
username="happy"
console.log(username);

let a=12;
let b=4;
let sum;

sum=a+b;
console.log(sum)

let city;
city="kigali";
console.log(city)
console.log("Then changed")

city="Musanze"
console.log(city)

let isLoggedIn= "true";
console.log("User is logged in:",isLoggedIn)



console.log("Functions")

function multiply(a,b){
      multiplication= a*b;
      return multiplication;
}

function doubleProduct(x, y) {
  return multiply(x, y) * 2;
}
console.log(multiply(3,6))
console.log(doubleProduct(5,6))

function  isAdult(age){
    
    return age>=18
}
function checkEligibility(name, age) {
    if(isAdult(age)){
        console.log(name,"is eligible")
    }else{
        console.log(name,"is not eligible")
    }
}
console.log(isAdult(20))
checkEligibility("John",20)
checkEligibility("John",12)



function getArea(length, width){
    return length * width
}

function  printArea(length,width){
    console.log("The area is:", getArea(3,2))
} 
printArea()

function toUpper(text) {
  return text.toUpperCase();
}


function greetUser(name) {
  const upperName = toUpper(name);
  console.log("Hello, " + upperName + "!");
}


greetUser("John");



function isEven(num) {
  return num % 2 === 0;
}

function printEvenStatus(num) {
  if (isEven(num)) {
    console.log(num + " is even");
  } else {
    console.log(num + " is not even");
  }
}

printEvenStatus(8); 
printEvenStatus(13); 


let fruits=[ "Apple", "Banana", "Mango"]
console.log(fruits)

fruits.push("Orange")
console.log(fruits)

fruits.shift("Apple")
console.log(fruits)

console.log(fruits[2])


function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}


printArray(["Apple", "Banana", "Mango"]);