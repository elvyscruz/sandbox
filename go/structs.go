package main

import "fmt"

func main() {
	mybill := newBill("diego's bill")
	fmt.Println(mybill.format())
}
