// Type annotations for functions tell TS 
// what type of arguments the function will receive 
// and  what type of values it will return


const add = (a: number, b: number): number => {
  return  a + b
}

// TS tries to infer the return type
const add2 = (a: number, b: number)=> {
  return a + b
}

// ** but always add the return annotation ** //
// !this examples return void! 
const subtract = (a: number, b: number) => {
  a - b
}

// Alternative function definition
function divide(a: number, b: number): number {
  return a / b
}

// Works also with anonymous functions

const multiple = function(a: number, b: number): number {
  return a * b
}

// void return type
const logger = (message : string): void => {
  console.log(message)
}

// never return type indicates the function 
// will never reach the end of function

const alwaysError = (): never => {
  throw new Error()
}

// Object Destructuring annotation in parameters

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date; weather: string}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)