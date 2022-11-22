// Given length of a regular hexagon, your function should return area of the hexagon.

const getHexagonArea = (length) => {
	return Math.floor((3 * Math.sqrt(3) * length ** 2) / 2);
};

a = getHexagonArea(10);
a;
