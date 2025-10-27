//Qn 1
let z = 1;

while (z <= 10) {
    console.log(z);
    z++;
}
 console.log('Even Numbers')
//Qn 2
let i = 2;

while (i <= 30) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
//Qn 3
console.log('Reverse')
let m =20;
while(m>=1){
    console.log(m);
    m--;
}
//Qn 4
console.log('Multiplication')
let f=1;
while(f<=10){
    console.log(`7 x ${f}= ${7*f}`)
    f++
}
//Qn 5
let text = "Edwin";
let q = 0;

while (q < text.length) {
    console.log(text[q]);
    q++;
}
//Qn 6
let sum = 0;
let num = 1;

while (sum <= 100) {
    sum += num;
    num++;
}

console.log("Final sum is:", sum);
console.log("Numbers added:", num -1);
//Qn 7

let count =50;
while(count>0){
    count-=5
    console.log(count);
    m--;
}
//Qn 8
console.log('Square Numbers')
let b=1;
while (b<=10) {
    square=b*b
    console.log(square);
    b++
}
//Qn 9
let fruits = ['apple', 'banana', 'mango', 'orange', 'grape'];
let target = 'mango';
let numb = 0;

while (numb < fruits.length) {
    if (fruits[numb] === target) {
        console.log(`${target} is at index ${numb}`);
        break;
    }
    numb++;
}
//Qn 10
console.log('odd')
let numbb = 1;

while (numbb <= 25) {
    if (numbb % 2 !== 0) {
        console.log(numbb);
    }
    numbb++;
}

