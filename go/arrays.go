package main

import (
	"fmt"
)

func main() {
	// arrays(fixed sizes)
	numbers := [4]int{4, 6, 8}
	names := [3]string{"john", "diego", "benita"}

	fmt.Println(names, len(names))
	fmt.Println(numbers, len(numbers))

	// slices (variable size)
	puppets := []string{"benita", "twon", "bob"}
	fmt.Println(puppets[2:])

	// add an element
	puppets = append(puppets, "foo")

	fmt.Println(puppets, len(puppets))
}
