// Annotating Arrays
const carMakers: string[] = ['ford','toyota','chevy']

// Add annotation only if not initialized
let luckyNumbers: string[]

// 2D Array
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camry']
]

// Array containing multiple types
let myArr: (string | number)[] = ["Dog", "Cat", 5]
myArr.push(7)
myArr.push('ok')


// Provides help with inference with values (hover over myCar and anotherCar)
 const myCar = carMakers[0]
 const anotherCar = carMakers.pop()

 // We get an error
 // carMakers.push(100)

 // Help with 'map, forEach, reduce, etc after object.'
 carMakers.map((car: string): number => {
  return car.length
 })

 // Use arrays to store a collections of items with arbitrary order