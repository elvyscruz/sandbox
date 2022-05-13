// Clases 
// Blueprints to create an object with some fields (values)
// and methods (functions) to represent a thing

// properties (fields) and methods can be public, private or protected`

class Vehicle {

  constructor(public color: string){} // add 'public' for shorcut property declaration 

  protected honk(): void {
  console.log('beep')
  }
}

class Bicycle extends Vehicle {
  // call constructor of parent automatically

  startRiding(){
    console.log(`riding ${this.color} bike...`)
  }

}

class Car extends Vehicle {

  constructor(wheels: number, color: string){
    super(color) // If derived class use a constructor, super() must be included
  }
  
  private drive(): void {
    console.log('vroom..')
  }
  startDriving(): void {
    this.drive()
    this.honk()
    console.log(this.color)
  }
}



const car = new Car(4, 'cyan')
car.startDriving()

const bike = new Bicycle('yellow')
bike.startRiding()

