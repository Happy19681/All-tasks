//Qn 1
let car={
 make:"Toyota",
 model:"Corolla",
 year:"2012",

 //For Qn 2
  getDetails: function () {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year)
console.log(car.getDetails())
//Qn 3
car["color"] = "Red";
console.log("Color:", car["color"])
//Qn 4
for (let key in car) {
  if (typeof car[key] !== "function") {
    console.log(`${key}: ${car[key]}`);
  }
}
//Qn 5
let user={
    name:"Wane",
    email:"wane@gmail.com",
    address:{
        city:"New york",
        steet:"5th Avenue"
    }
   
}
 console.log("City:",user.address.city);
//Qn 6
function logObject(obj) {
  const keys = Object.keys(obj);
  console.log("Keys:", keys);
}
const sampleObj = {
  name: "Happy",
  age: 30,
  city: "Tokyo"
};

logObject(sampleObj);
//Qn 7
function hasEmail(obj) {
  return obj.hasOwnProperty('email');
}
console.log(hasEmail({ name: "Happy", email: "happy@example.com" }));
console.log(hasEmail({ name: "Happy" }));                            
//Qn 8
const person = {
  name: "Happy",
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

person.greet(); 
//Qn 9
const cars = {
  make: "Toyota",
  model: "Corolla",
  year: 2012,
  color: "Red"
};
console.log('Copy')
const carCopy = { ...cars };
carCopy.color = "Blue";
console.log("Original car color:", cars.color);
console.log("Copied car color:", carCopy.color);

//Qn 10
const dog = {
  name: "Max",
  speak() {
    console.log(`${this.name} says Woof!`);
  }
};

dog.speak(); 
