<?php
# Arrays
// longer syntax
$arr = array(
  "foo" => "fooz",
  "bar" => "baz"
);

// shorter syntax
$arr = [
  "foo" => "fooz",
  "bar" => "baz"
];

// indexed arrays

$arr = ["foo","bar"];

# Operators -> ==, >, >=, <, <=, !==

var_dump($arr);

// accesing array elements
echo $arr[0], "\n";

// creating/modifying array elements
$arr[0] ="baz";

print_r($arr);
// remove element from array
unset($arr[1]);
unset($arr); // deletes the array

// Array Destructuring
$arr = ['foo', 'bar', 'baz'];
[$foo, $bar, $baz] = $arr;

// Array unpacking
$arr2 = [...$arr];

// iterating an array
$colors = array('red','blue','green','yellow');

foreach($colors as $color){
  echo "Do you like $color?\n";
}


// One-based array
$months = array(1 => 'january', 'february', 'march');
print_r($months);

// Sorting an array
sort($months);

