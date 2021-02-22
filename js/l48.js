/* 
A regular expression is a sequence of characters that forms a search pattern.

The search pattern can be used for text search and text replace operations.
*/

let re;
let str = 'holla, hello there!'
re = /hello/;
re2 = /hello/i; //case insensitive

// console.log(re);
// console.log(re.source);

//Executes a search on a string using a regular expression pattern
let result = re.exec(str);
 result = re2.exec(str); //using case insensitive
//there is match with 're' at index 3. it must have perfect match else return null



//return true/false. case sensitive, ignore /i
result = re.test(str)

//same as .exec()
result = str.match(re);


//Finds the first substring match. -1 if no results. not case sensitive 
result = str.search(re);

//replace the pattern with another string
result = str.replace(re, 'HI')

//return result
console.log(result);