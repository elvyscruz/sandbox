// Type Assertions are used to override default or expect value of a variable

type Brands = "Honda" | "Toyota" | "Nissan"

let cars: string[]  = ["Ford", "Honda","Nissan"]


const myCar = cars[0] as Brands

