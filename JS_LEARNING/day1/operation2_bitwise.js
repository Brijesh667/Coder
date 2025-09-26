// And (&)
console.log(4&5)
console.log(499&500)

/*
*****AND TABLE*****
    | A | B |A&B|
    | 1 | 1 | 1 |
    | 1 | 0 | 0 |
    | 0 | 1 | 0 |
    | 0 | 0 | 0 |
*/

//& Operation first change both number in binary then it perform bitwise and (&) operation 
//between both number then it convert result in decimal then it print final output


//OR (|) operation
console.log(4|5)
console.log(499|500)
//In the or(|) operation also first it convert both number in binary then it perform or(|) 
//operation between both number then it convert final output in decimal and print it 

/*
*****OR TABLE*****
    | A | B |A&B|
    | 1 | 1 | 1 |
    | 1 | 0 | 1 |
    | 0 | 1 | 1 |
    | 0 | 0 | 0 |
*/

//XOR operation
console.log(4^20)
console.log(749^789)
//This also fist change binary then perform XOR operation and convert in decimal then print it

/*
*****AND TABLE*****
    | A | B |A&B|
    | 1 | 1 | 0 |
    | 1 | 0 | 1 |
    | 0 | 1 | 1 |
    | 0 | 0 | 0 |
*/

//left shift <<
console.log(5<<6)// The ouput is 5 * pow(2,6) = 5*64 = 320 
console.log(435<<2)//The final out is 435*pow(2,2) = 435*4 = 1740 Firt it change 435 in binary then it 2 bit in left 
/*
example;
000010010.0000
left shift 2 bit
000010010,00.00
here 2 zero added in number

*/
//Right shift <<
console.log(20>>2)// The ouput is 20 / pow(2,2) = 20/4 = 5 
console.log(400>>2)//The final out is 400/pow(2,2) = 400*4 = 100 Firt it change 400 in binary then it 2 bit in left 
/*
example;
000010010.0000
left shift 2 bit
0000100.10,0000
here 10, shifted in right
*/


//Bitwise NOT (~): Inverts all bits (0 becomes 1, 1 becomes 0). This is a unary operator.
console.log(~10)
console.log(~99)
console.log(~-99)
//It first convert number in binary then performt NOT operation and then convert decimal and print final output
//how to guess  => firt add one in number and then reverse sign  => It is the final output
//Example: (10 = 10 + 1 = 11 = -11), (99 = 99+1 = 100 = -100), (-99 = -99 + 1 = -98 n= 98) 



