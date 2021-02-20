/* type conversion & type cohersion */

console.log('**********  to string **********');

val1 = String(555);
val2 = String(4 + 4);
val3 = String(true);
val4 = String(new Date());
val5 = String([ 1, 2, 3, 4, 5 ]);

console.log('val1 is: ' + val1 + ', of length: ' + val1.length);
console.log('val2 is: ' + val2 + ', of length: ' + val2.length);
console.log('val3 is: ' + val3 + ', of length: ' + val3.length);
console.log('val4 is: ' + val4 + ', of length: ' + val4.length);
console.log('val5 is: ' + val5 + ', of length: ' + val5.length);

console.log('\n\n**********  TO number **********');

val6 = Number('50');
val7 = Number(true);
val8 = Number(false);
val9 = Number(null);
val10 = Number('hi');
val11 = Number([ 1, 2, 3 ]);

console.log('val6 is: ' + val6);
console.log('val7 is: ' + val7);
console.log('val8 is: ' + val8);
console.log('val9 is: ' + val9);
console.log('val10 is: ' + val10);
console.log('val11 is: ' + val11);

console.log('\n\n********** type cohersion **********');

const a = 1;
const b = 2;
const c = a + b;
console.log('c is: ' + c);

//if one of the value is a string, then js will consider all as string & concat them

const d = String();
const e = 2;
const f = d + e; //1&2=12 instead of 1+2=3
console.log('f is concatenated: ' + f);
