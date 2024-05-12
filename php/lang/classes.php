<?php
# Classes

// Arrow (->) is used to access class properties
// Double collon (::) is used to access static properties

class SimpleClass
{
  // property declaration
  public $var = "a public var \n";

  public ?string $name;

  // constant declaration
  const CONSTANT = 'constant value';

  // constructor function
  public function __construct(?string $name)
  {
    $this->name = $name;
  }

  // method declaration
  public function displayVar()
  {
    echo $this->var;
  }

  // static method
  static function Static()
  {
    echo "i am sssstactic \n";
  }
}

$var1 = new SimpleClass('foo');
$var1->displayVar();

SimpleClass::Static();

echo "$var1->name \n";
echo SimpleClass::CONSTANT . "\n";

?>
