// Given an array and an item, your function should return the index at which the item is present.

const getArrIndex = (arr, item) => {
	for (let i = 0; i < arr.length; i++) {
		let arrItem = arr[i];
		if (arrItem === item) {
			return i;
		}
	}
	return -1;
};

a = getArrIndex([1, 2, 3, 4, 5, 8, 5, 3], 3);
a;
