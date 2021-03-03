/*
ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions). A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.

https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

Iterator VS Generator

https://stackoverflow.com/questions/37124006/iterator-and-a-generator-in-javascript

*/
/***********iterator - user defined********************* */

function nameIterator(names)
{
  let nextIndex = 0;
  //this function does print 1 name at a time. but the 2nd timwe u call, it return the 2nd one, until all names are returned.  it wont return anyhting if u call again after all names are called
  return {
    next: function ()
    {
      if (nextIndex < names.length) {
        return { value: names[nextIndex++], done: false }
      }
      else { return { done: true } }
    }
  }
}

//create array names
const namesArr = ['jack', 'jill', 'john'];

const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());



/***************generator - replaces above function ********************** */
function* sayNames()
{
  yield 'jack';
  yield 'jill';
  yield 'john';
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);


/**********ID creator *********************/
function* createIds()
{
  let index = 1;

  while (true) {
    yield index++
  }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);