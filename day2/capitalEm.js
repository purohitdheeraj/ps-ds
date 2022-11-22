// Given a sentence, return a sentence with first letter of all words as capital.

const capitalize = (sentence) => {
	// str are immutable so need new str
	let newSentence = "";
	let wordsArr = sentence.split(" ");

	for (let i = 0; i < wordsArr.length; i++) {
		let word = wordsArr[i];
		newSentence +=
			word[0].toUpperCase() + word.slice(1) + " ";
	}
	return newSentence.trim();
};

capitalize("hare krishna");
