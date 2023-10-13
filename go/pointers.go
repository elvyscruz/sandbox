package main

import "fmt"

// Pointer as paramter
func printTagLine(pname *string) {
	title := "Music with"

	// modify the pointer
	*pname = "Benita"
	fmt.Println(title, *pname)
}

func main() {
	name := "Diego"
	printTagLine(&name)
	fmt.Println(name)
}
