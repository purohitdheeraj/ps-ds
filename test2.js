function a() {
	var b = 100;
	c();
	function c() {
		console.log(b);
		var x = 24;
		d();
		function d() {
			console.log(b);
			console.log(x);
			e();
			function e() {
				console.log(b);
			}
		}
	}
}

var b = 10;
a();
