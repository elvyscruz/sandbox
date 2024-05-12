<?php
echo 'hello ';
echo "world!\n";
# Use double quotes for special chars
//this is a comment

echo <<<END
a
b
c

END;

# php basic types ->  boolan, integer, float, string, null
// php composeable types -> array, object, iterable, enum, resource, callable
// check type with var_dump()
$a_true = true; // a boolean
$a_false = false;
$a_str = 'foo'; // a string
$a_str2 = 'foo'; // simple quotes
$an_int = 12; // an integer

echo $a_true, $a_false, "\n";
echo $a_false ? 'true' : 'false', "\n"; //echo boolean values
echo $an_int, "\n";
echo 'this is 
something..
';
// get type of var
echo gettype($a_true), "\n";
// test type
echo is_int($a_str) ? 'yep' : 'nop', "\n";

# convert to type
// types -> int, bool, float, string, array, object, unset
$num = 8;
echo (string) $num, "\n";

# null type
$var = null;

?>
