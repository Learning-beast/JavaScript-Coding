const name = "harsh" ;
const repoCount = 50 ;

//to concatenate it

// console.log(name + repoCount ) ; not used nowadays to output using this so what we use is below by using `` backticks and ${} use of dollar below is an example of it 

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`) ;


//how to declare string 

const gameName = new String('HarshSingh') ;

console.log(gameName) ;


//string methods

//to access string specific element 

console.log(gameName[0]) ; //output H

//Length method = it return the length of the string
 console.log(gameName.length) ; //outputs the length of the string 

//convert the string into upper and lower case using the toUppercase() and toLowerCase() functions or methods

console.log(gameName.toLowerCase()) ; //IT WILL TURN THE STRING TO LOWER CASE BUT IT DID NOT CHANGE THE ORIGINAL VALUE AS STRING IS THE STACK VALUE IT MAKE CHANGES IN THE COPY OF THE STRING

/*
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/


console.log(gameName.charAt(2)) ; //to know what value is at any specific index we use this

console.log(gameName.indexOf('a')) ; // to know at what index the value of a is we use indexof method

console.log(gameName.at(2)) ; //using the at() function to know what value is at specific index


/*
Slicing in Strings we use this methods to achive that and the most important thing is that it returns -1 value for example if we say .slice(0,4); so it will return only 4 values not 5 as the index start from 0.

Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/

const newString = gameName.substring(0, 4) ;
console.log(newString);

const anotherString = gameName.slice(0, 4) ; //we can give both negative values in slice which we cannot do in substring this is an  advantage of slice function

const anotherString1 = gameName.slice(-1, -10) ;

//trimmethod or function in strings it trims or removes the extra spaces before and after the string

const newStringOne = "  hitesh  " ;

console.log(newStringOne);

console.log(newStringOne.trim());


//replace function in strings is used to replace the value we want to change for example in below example we replaced the %20 value in url with '-'   syntax of replace fuinction .replace('the value we want to change','with the value we want in place of it' )

const url = "https://harsh.com/harshs%20singh" ;

console.log(url.replace('%20','-'));



//function to check wheather the value is present in the strings or not = INCLUDES function

console.log(url.includes('harsh')); //as harsh is present in the string it return true lets go below to see if i put any wrong value wheather it will return false or not

console.log(url.includes('sundar')) ; //OUTPUTS FALSE


//concat function = to concatenate two strings we can use concat function 
/*
Description
The concat() method joins two or more strings.

The concat() method does not change the existing strings.

The concat() method returns a new string.

*/

let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
console.log(result);

//now if we want to output with space in between we use this 

let text3 = "sea";
let text4 = "food";
let result1 = text1.concat(" ",text4);
console.log(result1);
