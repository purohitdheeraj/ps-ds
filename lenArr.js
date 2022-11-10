const getArrLength = (arr) => arr.length;

let arr = ["hare krishna", "radhe krishna", "sita ram"];
let arr1 = [];

// iterative
const lenArr = (arr) => {
	let count = 0;
	for (let i = 0; arr[i] !== undefined; i++) {
		console.log(arr[i]);
		count++;
	}
	return count;
};
