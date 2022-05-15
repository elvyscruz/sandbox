// Typeguard is used to assert the type of value

// typeof -> number, string, boolean, symbol

// instanceof -> any value created with a constructor function



const checkValue = (val: string | string[]): number => {
  if(val instanceof Array ){ // this is a typeguard
      // val. includes arrays properties and methods
      console.log(val.values)
  }

  if(typeof val === 'string'){ //this is a typeguard
      // val. includes only string properties and methods
      console.log(val.toLocaleUpperCase)
  }
  return val.length
}