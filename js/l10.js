/*
1. 'for loop' using continue.
2. 'for loop' using break.
3. forEach
4. Map - return a value in each iteraetion
5. 'for in' loop (aka enhanced loop)

whats the diff - forEach vs Map?

Array.forEach “executes a provided function once per array element.”

Array.map “creates a new array with the results of calling a provided function on every element in this array.”

So, forEach doesn’t actually return anything. It just calls the function for each array element and then it’s done. So whatever you return within that called function is simply discarded.

On the other hand, map will similarly call the function for each array element but instead of discarding its return value, it will capture it and build a new array of those return values.

https://stackoverflow.com/questions/34426458/javascript-difference-between-foreach-and-map
*/




/* 1. 'for loop' using continue. it will only skip for that condition and continue looping */
for (let i = 1; i <= 10; i++){
  if (i === 5) {
    console.log('1. '+i + ' is skipped but loop still goes on');
    continue;
  }
  console.log(i);
}
console.log('\n\n');



/* 2. 'for loop' using break. it will stop loopng when condition is met */
for (let i = 1; i <= 10; i++){
  if (i === 5) {
    console.log('2. '+i + ' will be the last and will stop here.');
    break;
  }
  console.log(i);
}
console.log('\n');

/* 3. forEach */
var money = [1, 2, 3, 4, 5];
var total = 0;

//it simply loops the value. u can do functions while it is looping
money.forEach(function (monies)
{
  total += monies;
  console.log('money is: ' + monies);
})
console.log('3. total money is - ' + total+ '\n');


/* 4. Map - return a value in each iteraetion */
const users = [
  {id: 1, name:'a'},
  {id: 2, name:'b'},
  {id: 3, name:'c'},
  {id: 4, name:'d'}
]

const ids = users.map(function (user)
{
  return user.id;
})
console.log('\n4. returned map func:');
console.log(ids);
console.log('\n')


/* 5. 'for in' loop (aka enhanced loop) */
for (let y of money) {
  console.log('for in loop values - ' + y);
}
for (let y in money) {
  console.log('for in loop index - ' + y);
}