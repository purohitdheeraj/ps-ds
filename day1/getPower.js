// recursive
const getPower = (a, b) => {
	// base
	if (b === 0) {
		return 1;
	}
	console.log(a, b);

	// b-1 is recursive step
	let recurseCall = getPower(a, b - 1);

	let result = a * recurseCall;
	console.log(result);

	return result;
};

getPower(2, 3);
