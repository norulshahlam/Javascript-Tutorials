/* we will do only the useful maths functions */

val1 = Math.round(2.4); //round up or down
val2 = Math.ceil(2.00001); //always rounds up
val3 = Math.floor(2.9999); //always rounds down
val4 = Math.min(1, 2, 3, 4, 5); //gives min vvalue
val5 = Math.max(1, 2, 3, 4, 5); //gives max vvalue

console.log('val1: ' + val1);
console.log('val2: ' + val2);
console.log('val3: ' + val3);
console.log('val4: ' + val4);
console.log('val5: ' + val5);

val6 = Math.random() * 100; //returns 0-99 w many dec plcs
console.log('\nRandom generator\n\nval6: ' + val6);

val7 = Math.round(Math.random() * 100); //returns 0-99, w rounding
console.log('random: ' + val7);
