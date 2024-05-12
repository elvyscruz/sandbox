<?php
# Empty object
$o1 = new stdClass();
$o2 = new class {};
$o3 = (object) [];

$o1->ok = 'ok';
echo $o1->ok, "\n";

# Use a class to instatiate a new object
class Foo
{
  function doFoo()
  {
    echo "Doing Foo \n";
  }
}

$bar = new Foo();

$bar->doFoo();

//convert array to object
$obj = (object) ['a', 'b'];
echo $obj->{0};
