package main

import (
	"fmt"
	"math"
	"strings"
)

func saludar(nombre string) {
	fmt.Printf("Buenos dias %v \n", nombre)
}

func despedir(nombre string) {
	fmt.Printf("Adios %v \n", nombre)
}

// pasing a function as a parameter
func fNombres(nombres []string, f func(string)) {
	for _, v := range nombres {
		f(v)
	}
}

// returning a value
func circleArea(r float64) float64 {
	return math.Pi * r * r
}

// returning multiple values

func splitName(name string) (string, string) {
	namearr := strings.Split(name, " ")
	return namearr[0], namearr[1]
}

func main() {
	saludar("juan")
	despedir("jose")

	fNombres([]string{"daliette", "lia", "elisa"}, saludar)
	fmt.Println(circleArea(10.5))
	fmt.Println(splitName("Elvys cruz"))
}
