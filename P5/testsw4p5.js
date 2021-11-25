// JavaScript source code
const chai = window.chai;
const expect = chai.expect;

//Hypotenuse Test 1
describe("Hypotenuse", function () {
    it("should return 20.40", function () {
        calculateHypotenuse(20, 4);
        expect(20.40, chai.side3);
    });
});

//Hypotenuse Test 2
describe("Hypotenuse", function () {
    it("should return 8.60", function () {
        calculateHypotenuse(5, 7);
        expect(8.60, chai.side3);
    });
});

//Hypotenuse Test 3
describe("Hypotenuse", function () {
    it("should return 12.65", function () {
        calculateHypotenuse(12.4, 2.5);
        expect(12.17, chai.side3);
    });
});
