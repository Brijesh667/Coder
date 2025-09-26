//String
let str1 = "Hello, how are you!"
let str2 = 'Hello, I am fine you say!'
let a = 4
let str3 = `hello I have ${a}, I am enjoying`
console.log(str1,"\n", str2,"\n",str3)

//String Concatention
let str4 = str1 + str2;
console.log(str4)

//Length of string
console.log(`String Str4 length is: ${str4.length}`)//We can find string length, it is not a function

//pring "hey", 'hey'

console.log('"hey"')
console.log("'hey'")
console.log("hello world how are you, \nThe world says, I am fine you say!")
// when we want to print "", '', \n then we use scaping character that is \
// \ say consider my next word as a string
console.log("hello world how are you, \\nThe world says, I am fine you say!")//Here the \n printed

let world_name = "Hello world, I am doing nothing"
console.log(world_name[4])//It will print o
console.log(world_name[6])//It will print w

//charAT(index), we can give index it return character which is present that index
console.log(world_name.charAt(6))//It return W
console.log(world_name.toUpperCase())//charnge all character in upper case
console.log("Orginal string",world_name)
console.log(world_name.toLowerCase())//change all character in lower case
console.log("Orginal string",world_name)
console.log(world_name.toLocaleUpperCase("tr"))
console.log("Orginal string",world_name)
console.log(world_name.toLocaleLowerCase("tr"))//It is country language depended here we can give language name in "tr" Turkish  
console.log("Orginal string",world_name)

//word index seraching
let s1 = "Hello coder army, how are coder you"
console.log(s1.indexOf("coder"))//first It will serach word in string then return it's first index if word not found it return -1
console.log(s1.indexOf("Coder"))//It return -1, becaue C and c are different


//we can return last index of word in string
console.log(s1.lastIndexOf("coder"))//it return last word first index 
//A string can have many same word so it return last word first index


//slicing, here we give first index (include) and last index (exclude)
console.log(s1.slice(1,5))//it will print 1,2,3,4 index character
console.log(s1.substring(0,10))//It return a substring with start to end index 
console.log(s1)

//slicing can take negative index but substring can not take negative index 
/*
 0  1  2  3  4
 H  E  L  L  0
-5 -4 -3 -2 -1
*/

//replacing string 
console.log(s1.replace("coder","CODER"))//it change only first occurance
console.log(s1)
console.log(s1.replaceAll("coder","CODER"))//it change only all occurance

//split(delimiter)->jo argument pass karenge uski base par yeh string ko split kar dega and array mein change kar dega
console.log(s1.split(" "))//by using split we can split string in array,array is a object
let s2 = "abcabcabcabcabcabc"
console.log(s2.split("c"))

let s3 = "   abc   "
console.log(s3.trim())//trim both side extra space
console.log(s3.trimEnd())//trim end extra space 
console.log(s3.trimStart())//trim start extra space 

//String 
let s4 = new String("I am new string and I am taking memory in heap")
console.log(s4)

//It is a string object
console.log(s4[5])

let num1 = 231
let num2 = new Number(231)
let num3 = new Number(231)
console.log(`num1:${typeof num1} and num2:${typeof num2} and num3:${typeof(231)}`)
console.log(num1==num2)
// here num1 type of number and num2 type is object but
// when we compare both then num2 that has object type
// that convert in number then here only value comparission
console.log(num2==num3)
// here num2 and num3 both are object type 
// when we are comparing both then it give false
// num2 has address of location where 231 is p






