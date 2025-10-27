//Qn 1
try {
  let result;
  result = n1 / n2;
  console.log(result);
} catch (error) {
  console.log(error.message);
}
//Qn 2
try {
  let age = -5;
  if (age < 0) {
    throw new Error("Invalid age");
  }
  console.log("Age is:", age);
} catch (error) {
  console.log("Custom Error:", error.message);
}
//Qn 3
function safeDivide(a, b) {
  try {
    if (b <= 0) {
      throw new Error("invalid ");
    }
    let ans = a / b;
    return ans;
  } catch (error) {
    console.log("Custom Error:", error.message);
    return null;
  }
}
console.log(safeDivide(10, -7));
//Qn 4
try {
    let n1=3;
    let n3=6;
    let res=n3/n1;
    console.log(resf)
    
} catch (error) {
    console.log(error.message);
}finally{
    console.log('Finished');
}
//Qn 5
try {
    let n4;
    let m=4;
    console.log(n4);
} catch (error) {
    console.log(error.message);
}
//Qn 6
try {
    let man=-2;
    if (man<=0) {
       throw new Error("Something went wrong"); 
    }
} catch (error) {
    console.log('Caught error:',error.message)
}
//Qn 7

try {
    throw "This is a string error";
} catch (error) {
    console.log("Caught error:", error);
}
//Qn 8
//const jsonString = '{"name": "Happy", "age": 25}';
try {
 const parsedData=JSON.parse(jsonString);
 console.log('Parsed Json',parsedData);
} catch (error) {
  console.log('Invalid error:',error.message)
}
//Qn 9
function parseNumber(str) {
    try {
        const num = Number(str);

        if (isNaN(num)) {
          
            throw new Error("Invalid number format");
        }

        console.log("Parsed number:", num);
        return num;

    } catch (error) {
        console.log("Error:", error.message);
        return null; 
    }
}


parseNumber("42"); 
//Qn 10
try {
    let num = 42;
    let result = num.toUpperCase(); 
    console.log(result);
} catch (error) {
    console.log("Caught an error:", error.message);
}
