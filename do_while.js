// 1. Multiplication table of 3
{
  let i = 1;
  do {
    console.log(`3 x ${i} = ${3 * i}`);
    i++;
  } while (i <= 10);
}

// 2. Print numbers from 100 to 90
{
  let i = 100;
  do {
    console.log(i);
    i--;
  } while (i >= 90);
}

// 3. Input numbers until greater than 100
{
  let num;
  do {
    num = parseInt(prompt("Enter a number greater than 100:"));
  } while (num <= 100);
}

// 4. Multiplication table of 3 (duplicate of 1)
{
  let i = 1;
  do {
    console.log(`3 x ${i} = ${3 * i}`);
    i++;
  } while (i <= 10);
}

// 5. Reverse digits of a number
{
  let number = 12345;
  let reversed = 0;
  do {
    reversed = reversed * 10 + number % 10;
    number = Math.floor(number / 10);
  } while (number > 0);
  console.log("Reversed:", reversed);
}

// 6. Keep adding numbers until sum >= 500
{
  let sum = 0;
  let num;
  do {
    num = parseInt(prompt("Enter a number to add:"));
    sum += num;
  } while (sum < 500);
  console.log("Total Sum:", sum);
}

// 7. Loop runs at least once
{
  let i = 20;
  do {
    console.log("This runs at least once");
  } while (i < 10);
}

// 8. Print every character in a string
{
  let str = "Hello, world!";
  let i = 0;
  do {
    console.log(str[i]);
    i++;
  } while (i < str.length);
}

// 9. Print first 10 powers of 2
{
  let i = 0;
  do {
    console.log(`2^${i} = ${2 ** i}`);
    i++;
  } while (i < 10);
}

// 10. Print all vowels in a string
{
  let str = "Programming is powerful!";
  let i = 0;
  do {
    let ch = str[i].toLowerCase();
    if ('aeiou'.includes(ch)) {
      console.log(ch);
    }
    i++;
  } while (i < str.length);
}
