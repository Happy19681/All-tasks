//Qn 1
let i;
for(i=1;i<=10;i++){
    console.log(i)
}
//Qn 2
console.log('Even Numbers')
for (let a = 2; a <= 20; a += 2){
    console.log(a)
}
//Qn 3
console.log('Multiplication')
for(let i = 1;i<=10;i++){
    console.log(`5 x ${i}= ${5*i}`)
}
//Qn 4
console.log('Array Elements')
let fruits=['apple','orange','banana','grapes'];
for( let i= 0;i<=3;i++){
    console.log(fruits[i]);
}
//Qn 5

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i
}

console.log("Sum from 1 to 100 is:", sum);
//Qn 6
let n = 3;      
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i
}

console.log(`Factorial of ${n} is:`, factorial);
//Qn 7
console.log('Odd')
for(let i=1; i<=15; i++){
    if (i%2===1) {
        console.log(i);
    }
    
}
//Qn 8
console.log('Reverse')
for(let i=10;i>=1;i--){
    console.log(i)
}
//Qn 9

for(let m=1;m<=10;m++){
    let square=m*m
         console.log(`Square of ${m} is:${square}`)
}
//Qn 10
let count = 0;

for (let m = 1; m <= 50; m++) {
    if (m % 3 === 0) {
        console.log(m); 
        count++;          
    }
}

console.log("Total numbers divisible by 3:", count);
