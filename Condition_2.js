//Qn 1
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}
isLeapYear(2024);

//Qn 2
function checkCharacter(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    console.log(char + " is a vowel.");
  } else {
    console.log(char + " is a consonant.");
  }
}
checkCharacter("f");

//Qn 3
function divide(num) {
  if (num % 3 === 0) {
    console.log(num, "is divisible by 3");
  } else if (num % 5 === 0) {
    console.log(num, "is divisible by 5");
  } else {
    console.log("Your input is neither divided by 3 nor 5");
  }
}
divide(10);
//Qn 4
function prime(numb) {
  if (numb < 2) {
    console.log(numb, "is not a prime number");
    return;
  }

  for (let i = 2; i < numb; i++) {
    if (numb % i === 0) {
      console.log(numb, "is not a prime number");
      return;
    }
  }

  console.log(numb, "is a prime number");
}
prime(9);
//Qn 5
function vote(age) {
  if (age < 18) {
    console.log(age, "Is not allowed to vote");
  } else if (age >= 18) {
    console.log(age, "Is allowed to vote");
  }
}
vote(18);

//Qn 6
function check(dig) {
  let length = dig.toString().length;
  if (length === 3) {
    console.log(dig, "Has three digits");
  } else {
    console.log(dig, "doesnot have 3 digits");
  }
}
check(456);
//Qn 7
function emptyCheck(str) {
  if (str.length === 0) {
    console.log(str, "is empty");
  } else {
    console.log(str, "is not empty");
  }
}
emptyCheck("");
//Qn 8
function compare(str1, str2) {
  if (str1 === str2) {
    console.log("strings are equal");
  } else {
    console.log("strings are not equal");
  }
}
compare("hello", "hello");
//Qn 9
function multiple(mult1, mult2) {
  if (mult1 % mult2 === 0) {
    console.log(mult1, "is a multiple of", mult2);
  }else{
    console.log(mult1,'is not a multiple',mult2)
  }
}
multiple(24,12)
//Qn 10
function small(n1,n2,n3){
     if (n1<n2 && n1<n3) {
    console.log(n1,'Number 1 is the smallest');
  } else if(n2<n1 && n2<n3){
    console.log(n2,' Number 2 is the smallest');
  } else {
       console.log(n3,'Number 3 is the smallest');
  }
}
small(1,10,11)
//Qn 11
function upper(letter){
    if (letter >='A'&& letter <= 'Z') {
        console.log('Is uppercase');
    }else if(letter >='a'&& letter <= 'z'){
        console.log('Is not uppercase');
    }else{
        console.log('Is not aletter');
    }
}
upper('A')
//Qn 12
function range(num){
    let checkRange = num >= 10 && num <= 100;
    if (checkRange) {
        console.log('Number is in the desired range');
    }else {
         console.log('Number is not in the desired range');
    }
}
range(78)

//Qn 13
function pass(grd){
    if (grd>=50) {
        console.log('Student has passed')
    }else{
        console.log('Student has failed')
    }
}
pass(67)
//Qn 14
function compareSize(num1,num2){
    if (num1 === num2) {
        console.log(num1,'is equal to',num2);
    }else if(num1 < num2){
        console.log(num1,'is less than',num2);
    }else{
        console.log(num1,'is greater than',num2);
    }
}
compareSize(10,10)
//Qn 15
function greet(hour){
    if (hour >= 5 && hour <= 11) {
        console.log('Good Morning');
    }else if(hour >= 12 && hour <= 16){
        console.log('Good Afternoon');
    }else if(hour >= 17 && hour <= 20){
        console.log('Good Evening');
    }else if(hour >= 21 && hour <= 23 || hour >= 0 && hour <= 4 ){
        console.log('Good Night');
    }else {
        console.log('Invalid Hour');
    }
}
greet(24)