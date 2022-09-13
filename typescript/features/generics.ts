// Generics
// - Like function arguments, but for types in a class/function definitions
// - Allows us to define the type of a property/argument/return value at a future point
// - Used heavily when writing reusable code


 class HoldAnything<T>{
	// use generics as a property type 
 	data: T; 

  // use generics in function parameters and return types
  add(a: T): T {  
		return a
	} 
 
}


 const holdNumber = new HoldAnything<number>();
 holdNumber.data =123

 const holdString = new HoldAnything<string>();
 holdString.data = 'hello'
