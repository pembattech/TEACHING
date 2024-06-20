<?php
// Global variable
$globalVar = "I'm a global variable";

function myFunction() {
    // Local variable
    $localVar = "I'm a local variable";
    echo $localVar; // Outputs: I'm a local variable

    // Accessing global variable inside the function
    global $globalVar;
    echo $globalVar; // Outputs: I'm a global variable
}

myFunction();

// Static variable example
function myStaticFunction() {
    $count = 0; // Static variable
    $count++;
    echo $count; // Outputs incremented value on each call
}

myStaticFunction(); // Outputs: 1
myStaticFunction(); // Outputs: 2
myStaticFunction(); // Outputs: 3
?>
