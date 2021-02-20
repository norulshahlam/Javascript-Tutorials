// function maxNumber(arr) {
// 	let maxNum = 0;
// 	for (i of arr) {
// 		//store array values in i
// 		if (i > maxNum) {
// 			//check for max
// 			maxNum = i; //if current i is bigger, than store into maxNum
// 		}
// 	}
// 	console.log(arr.max);
// 	return console.log(maxNum);
// }

// maxNumber([5, 1, 6, 9, 2]);

function maxNumber(arr) {
	let maxNum = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === Math.max(...arr)) {
			maxNum = arr[i];
			console.log(maxNum);
		}
	}
	console.log(arr);

	return console.log(maxNum);
}
maxNumber([ 5, 1, 6, 9, 2 ]);
