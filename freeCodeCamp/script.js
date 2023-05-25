//* increment string

var ourStr = "i Come First.";
var theEnd = " !";
ourStr += "I Come Second";
ourStr += theEnd;

console.log(ourStr);
console.log(ourStr.length)

//--------------------------------

//* STRINGS IS IMMUTABLES

var myStr = "jello, world";

myStr[0] = "h"; // can't only change one letter
myStr = "hello, world"; // type the whole string
console.log(myStr)
//------------------------------------------------
//* ARRAY IS MUTABLE
var ourArray = [10, 20, 30];
ourArray[0] = 55;
console.log(ourArray); // [55,20,30]

//* if i didn't write var or let before variable it'll be GLOBAL...
