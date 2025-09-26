//Operators in java script work like c, c++, java, python, like other programing language
console.log(2*4/4*4+3-34)//This is not good habit so always write in brakes 
console.log((((((2*4)/4)*4)+3)-34))//This is a good way to write expression
// Rule to solve expresssion 
//1. First solve devide(/) and multiply(*)
//2.Secondd solve sum(+) and subtraction(-)
//3.follow both first and second rule to left to right 

//pre-increament
let a = 3;
console.log(++a)//It wil print 4
//post-increament
let b = 5;
console.log(b++)//It will print 5
console.log(b)//It will print 6
//pre-decreament
let c = 7;
console.log(--c);//It will print 6
//post decreament
let d = 9;
console.log(d--)//it will print 9
console.log(d)//it will print 8

//Assignment Operator
let x = 20
x+=10;// x = x+10
console.log(x)//It will print 30

x-=10;//x = x-10
console.log(x)//It will print 20

x*=2//x = x*2
console.log(x)//It will print 40

x/=2;//x = x/2
console.log(x)//It will print 20


//Comparision operator
//first it convert same data type and then it compare 
//if we compare number with string or boolean then first it convert it in number then it compare
let l1 = false
console.log(2==l1)//here l1 convert in number then it is comparing
 
//here is a rule that is only *****null==undefine******
//Other all compare same way like first convert in same data type and then compare
console.log(null==null)//true
console.log(null>=null)//true
console.log(null>null)//true
console.log(null<=null)//true
console.log(null==0)//true






