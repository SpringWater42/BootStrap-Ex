function factorial(num) {
  let sum = 1;
  for (let i = num; i > 1; i--) 
  sum *= i;
  console.log(sum);
  
}
factorial(8);
