// Interfaces : 
// * allow to specify the structure for a type
// * facilitates reusable code (check Sorter.tsa)
// * sets up a contract between classes
// * promotes loose coumpling 

// Recomendations for reusable code:

// - use interfaces with classes whenever posible

// - create functions (also constructor) in classes that accept arguments that are
// typed with interfaces

// - create clases that decide to implement a given interface to work with a function

// - use interfaces when you have different objects that need to work together

interface Rollable {
	wheelSize: number;
	numberOfWheels: number
}


const roll = (vehicle: Rollable): void => {
	console.log(`Rolling with ${ vehicle.numberOfWheels } wheels and ${vehicle.wheelSize} inch tires`)	
}

const bicycle = {
	wheelSize: 29,
	numberOfWheels: 2
}

const car = {
	wheelSize: 20,
	numberOfWheels: 4
}

console.log(roll(bicycle))
console.log(roll(car))
