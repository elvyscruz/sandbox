let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

// builtin objects
let now: Date = new Date 

// Array
let colors: string[] = ['red','green','blue']
let myNumbers: number[] = [1,2,3,4]
let truthTable: boolean[] = [true, true, false, false]

// Classes

class Car {}
let car: Car = new Car()

// Object literal
let point: {x: number; y: number} = { 
  x: 10, 
  y: 20
}

// Function
const logNumber: (i: number)=> void = (i: number) => {
  console.log(i)
}

// When to use annotations

// 1) When a function returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json)
console.log(coordinates)

// 2) When we declare a variable on one line and initialize it later
let words: string[]
words   = ['red','green','blue']

// 3) When we have a variable that cant be inferred
let numbers: Array<number | boolean> = [-10, -1, 12]

// 4) When defining functions (annotate parameters and return type)
let  sum = (a: number, b: number): number => {
  return a + b
}
