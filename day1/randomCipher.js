const randomCipher = (strInput) => {
	let letters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ.,?!abcdefghijklmnopqrstuvwxyz0123456789";

	let newCipher = "";

	let shift = Math.floor(Math.random() * 66) + 1;

	for (let i = 0; i < strInput.length; i++) {
		let char = strInput[i];
		let charIndex = letters.indexOf(char);
		let newIndex = (charIndex + shift) % letters.length;
		newCipher += letters[newIndex];
	}
	return newCipher;
};

console.log(randomCipher("0101"));
