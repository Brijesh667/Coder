//Number 

let num1 = 231//it't is a number and it's type is a number
let num2 = new Number(231)//It is a number it taking memory in heap and it's type is object
let num3 = new Number(231)
console.log(`num1 type is: ${typeof num1} and it's valu is: ${num1}`)
console.log(`num1 type is: ${typeof num2} and it's valu is: ${num2}`)
console.log(`num1 type is: ${typeof num3} and it's valu is: ${num3}`)

console.log(num1==num2)//Here first num2 convert in number then it compare and Number(num2) = 231 so it's true because (231==231)
console.log(num2==num3)//Here num2 and num3 both are same type both are containg address of a variable that's is not equal so it give false
//but when we check by === then both will be false
console.log(num1===num2)//Here there will no Conversion so pointer and variable can not be equala
console.log(num2===num3)//Here data type is equal but it's value is not equal


//Some mathematics operation on number

let num4 = 231.6834
console.log(num4.toFixed(1))//jo number iske andar pass karenge yeh decimal ke baad utne hi digit dega output mein round off karke
console.log(num4.toPrecision(3))//jo number iske andar pass karenge utne hi degit output mein dega round off karke
console.log(num4.toExponential(4))//jo number pass karenge yeh point ke baad utne hi digit dega and baki sab ko 10 ki power mein output dega example (2.n digit and e+power)
console.log(num4.toString(), typeof (num4.toString()))//Number ko String mein change kar dega
console.log(num4.valueOf())//Variable value print kar dega

// We can  use many math mathmatics function like log value E value PI value
console.log(Math.E)//this is log base e value that 2.71... something 
console.log(Math.LN10)//This is value of log10 base e
console.log(Math.PI)//This is pi value
console.log(Math.pow(2,3))//it take two argument one is value and another it's power
/*********Randon value  Generation in Java Script usin Mathematics function */
let rand_val = Math.random()// It generate value between 0 and 1 (0<= value <1)
console.log(rand_val)
//Generate the value between 0 to 9
console.log(Math.floor(rand_val*10))//It create 10 different type of value between 0 to 9
//Generate the value between 1 to 10
console.log(Math.floor((rand_val*10)+1))//It will generate the value between 1 to 10
//generate the value between max to min 
/*
let value = Math.floor((Math.random()(max-min+1))+min)
here (max-min+1) = how many different value need
+ min = add a add this value so that value can start from min
*/
console.log()

