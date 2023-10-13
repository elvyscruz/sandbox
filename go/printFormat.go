package main

import "fmt"

func main() {
	name := "Elvys"
	lastname := "Cruz"
	nickname := "el boris"
	age := 45

	// printLine (Print lines)
	fmt.Println("hello world")

	// Printf (formated strings)
	fmt.Printf("My name is %v %v \n", name, lastname)
	fmt.Printf("and my nickname is %q \n", nickname)
	fmt.Printf("age is of type %T \n", age)
	fmt.Printf("your credit score is %f \n", 225.3)
	fmt.Printf("your rounded credit score is %0.2f \n", 225.3)

	// Sprintf(save formated string)
	str := fmt.Sprintf("My name is %v %v \n", name, lastname)
	fmt.Println(str)
}
