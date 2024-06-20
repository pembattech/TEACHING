// String to Number (explicit)
let strNum = "42";
let realNum = Number(strNum); // realNum is 42 (number)

// Number to String (explicit and implicit)
let numStr = 42;
let str1 = String(numStr); // str1 is "42" (string)
let str2 = numStr.toString(); // str2 is also "42" (string)

// Booleans as Numbers (implicit)
let trueVal = true;
let falseVal = false;
let numTrue = Number(trueVal); // numTrue is 1 (truthy to number)
let numFalse = Number(falseVal); // numFalse is 0 (falsy to number)

// Numbers as Booleans (implicit)
let zeroVal = 0;
let oneVal = 1;
let isZero = Boolean(zeroVal); // isZero is false (falsy)
let isOne = Boolean(oneVal); // isOne is true (truthy)

// Strings as Booleans (implicit)
let emptyString = "";
let someString = "JavaScript";
let isEmpty = Boolean(emptyString); // isEmpty is false (falsy)
let isNotEmpty = Boolean(someString); // isNotEmpty is true (truthy)
