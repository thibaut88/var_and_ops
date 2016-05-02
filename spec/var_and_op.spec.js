var tester = require("../lib/var_and_op");


describe("Javascript Variables and Operateur Kata", function() {

	it("should check variables equality", function() {

		var result = tester.isEquals(13, "13");

		expect(result).toBeFalsy();
	});


	it("should add 10 and multiply by 5", function() {

		var result = tester.add10AndMultiplyBy5(2);
		expect(result).toBe(60);
	})

	it("should compute an addition and not a concatenation", function() {

		var result = tester.sum(2, "5", 4);
		expect(result).toBe(11);

	});

	it("should compute exponentiation", function() {
		var result = tester.exponentiel(2,3);
		expect(result).toBe(8);
	})


    it("should compute the double of the number", function(){
    	var result = tester.computeDouble(4);
    	expect(result).toBe(8);

    })

});
