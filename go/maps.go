package main

import "fmt"

func main() {
	menu := map[string]float64{
		"soup":    4.99,
		"pie":     7.99,
		"salad":   3.76,
		"pudding": 2.56,
	}
	fmt.Println(menu)
	fmt.Println(menu["pie"])

	// looping maps
	for k, v := range menu {
		fmt.Println(k, "-", v)
	}

	// update item in map
	menu["pie"] = 1.99
	fmt.Println(menu["pie"])
}
