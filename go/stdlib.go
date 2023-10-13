package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {
	greetings := "hello there friends!"

	// strings package
	fmt.Println(strings.Contains(greetings, "hello"))
	fmt.Println(strings.ReplaceAll(greetings, "hello", "hi"))
	fmt.Println(strings.ToUpper(greetings))
	fmt.Println(strings.Index(greetings, "llo"))
	fmt.Println(strings.Split(greetings, " "))

	// sort package
	ages := []int{45, 32, 43, 23}

	sort.Ints(ages)

	fmt.Println(ages)

	index := sort.SearchInts(ages, 32)

	fmt.Println(index)

	names := []string{"daliette", "lia", "elisa"}
	sort.Strings(names)
	fmt.Println(names)

	fmt.Println(sort.SearchStrings(names, "lia"))
}
