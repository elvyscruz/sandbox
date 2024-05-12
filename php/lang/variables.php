<?php
#variables

$foo = 'foozz';

// assign by reference
$bar = &$foo;

echo $bar, "\n";

// using .= for strings
$var1 = 'ok';
$var1 .= '2';

echo $var1, "\n";

// using += for numbers
$num = 1;
$num += 1;

echo $num, "\n";

// check if variable exist or is null

if (!isset($a)) {
  print "a no existe \n";
}

// check if variable is null

print <<<EOF
Predefined Variable
There are 12 predefined variables in php 8
1.$GLOBALS
2.$_SERVER
3.$_REQUEST
4.$_FILES
5.$_ENV
6.$_SESSION
7.$_COOKIE
8.$_GET
9.$_POST
10.$http_response_header
11.$argc
12.$argv

User Define variable are 3 types
1.variable scope
2.variable variables
3.reference variable

variable scope are 3 types
1.local scope
2.global scope
3.static variable

EOF;

# using global keyword
$a = 1;
$b = 2;

function Sum()
{
  global $a, $b;

  $b = $a + $b;
}

Sum();
echo $b, "\n";

# using static variables
function test()
{
  static $a = 0;
  echo $a;
  $a++;
}

echo test(), "\n";
echo test(), "\n";

// variables variables

$a = 'hello';

$$a = 'world';

echo "$a $hello\n";
echo "$a ${$a}\n";

// Accesing variables coming from HTML Forms
// echo $_POST['username'];
// echo $_REQUEST['username'];

// Determining variable type
// gettype(), is_array(), is_float(), is_int(), is_object(), and is_string().

// defining contants

define('FOO', 'IM FOO');
define('FOO1', 'IM FOO1');

echo FOO, "\n";
