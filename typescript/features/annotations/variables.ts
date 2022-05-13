let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true
let notMuch: null = null
let nothing: undefined = undefined

// built-in objects
let now : Date = new Date();

// Array
let colores: string[] = ['red','green','yellow']
let luckyNumbers: number[] = [8,12,18,7,21]
let truthTable: boolean[] = [true,false,false,true]

// Classes
class Car {}

let car: Car = new Car()

// Object Literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1) When a function returns the any type

  const json = '{"x": 10, "y": 20}'
  const coordinates: { x: number; y: number} = JSON.parse(json)
  console.log(coordinates.x,coordinates.y)

// 2) When we declare a variable on one line and initialize it on another line

    let isCustomer : boolean

    isCustomer = false

// 3) Variables whose type cannot be infered
    let myvar: boolean| undefined = undefined

    myvar = true
