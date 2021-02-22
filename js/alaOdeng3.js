function numbers()
{
  let numbers = [];
  for (let i = 1; i <= 100; i++){
    numbers[i + 1] = i;
  }
  return numbers;
}

// console.log(numbers());

numbers().forEach(function (number)
{
  console.log(number)
});