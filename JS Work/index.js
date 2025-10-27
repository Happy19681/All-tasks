function EmployeeDetails(basicSalary, bonus, overtimeHours) {
  const overtimePay = overtimeHours * 100;
  const totalSalary = basicSalary + bonus + overtimePay;
  console.log("totalsalary:", totalSalary);

  let taxRate;
  if (totalSalary > 60000) {
    taxRate = 0.20;
  } else if (totalSalary > 40000 && totalSalary < 60000) {
    taxRate = 0.10;
  } else {
    taxRate = 0.05;
  }
  console.log("tax:", (taxRate * 100) + "%");

  const taxAmount = totalSalary * taxRate;
  console.log("taxamount:", taxAmount);


  const netSalary = totalSalary - taxAmount;
  console.log("netsalary:", netSalary);

  
  let performance;
  if (overtimeHours >= 20) {
    performance = "Excellent";
  } else if (overtimeHours >= 10) {
    performance = "Good";
  } else {
    performance = "Average";
  }
  console.log("performance:", performance);

}
EmployeeDetails(30000, 5000, 2);
