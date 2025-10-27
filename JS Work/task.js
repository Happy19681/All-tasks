function totalMarks(math, english, science) {
  const total = math + english + science;
  const average = total / 3;

  console.log("Total Marks:", total);
  console.log("Average:", average); 


  if (average >= 80) {
    console.log("Grade: A");
  } else if (average >= 70 && average < 80) {
    console.log("Grade: B");
  } else if (average >= 60 && average < 70) {
    console.log("Grade: C");
  } else if (average >= 50 && average < 60) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }

  if (math < 40 || english < 40 || science < 40) {
    console.log("Status: Fail");
  } else {
    console.log("Status: Pass");
  }
}


totalMarks(40, 80, 75);
