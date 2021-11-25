// JavaScript source code
//variables 
var side1, side2, side3;
//prompts user for lengths
side1 = parseInt(prompt("Please enter a length for the first side: "));
//captures and converts type string user input to type int
side2 = parseInt(prompt("Please enter a length for the second side: "));

function calculateHypotenuse(side1, side2) {
	/*square side1 and side2
	 * and assigns value to side3
	 */
	side3 = (side1 * side1) + (side2 * side2);
	//computes the square root of side3
	//and round the value of side3 to 2 decimal places
	side3 = Math.sqrt(side3).toFixed(2);
	//returns side3
	return side3;
}

console.log("The hypotenuse = " + calculateHypotenuse(side1, side2));
