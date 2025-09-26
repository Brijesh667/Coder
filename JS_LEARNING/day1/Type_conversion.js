//Number to String conversion
let num = 435
console.log(num, "It's type is:",typeof num)
num  = String(num)
console.log(num, "Now, It's type is:",typeof num)


//Strintg to Number
let n1 = "Rahul"//It will convert in a number But it's type will number
let n2 = "34534"//it will convert in number But it's type will number
let n3 = "343r"//It will convert NaN (Not a  Number) But it's type will number
let n4 = ""//it will Convert in 0 But it's type will number
n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)
n4 = Number(n4)
console.log(n1,typeof n1, n2, typeof n2 ,n3, typeof n3,n4, typeof n4)

//String to Boolean conversion
let str1 = ""//it will change it in false or empty string will convert in false
let str2 = " "
let str3 = "Abc"
str1 = Boolean(str1)//False
str2 = Boolean(str2)//True
str3 = Boolean(str3)//True
//str1, str2, str3 all type is Boolean
console.log(str1, typeof str1, str2, typeof str2, str3, typeof str3)

//Boolean to String
let c1 = true;
let c2 = false;
console.log(`${c1} ${c2} and it's type is ${typeof c1}`)
c1 = String(c1)
c2 = String(c2)
console.log(`${c1} ${c2} and it's type is ${typeof c1}`)//It give also true and false but it's type will String

//Boolean to Number
let cc1 = true;
let cc2 = false;
console.log(Number(cc1))
console.log(Number(cc2))

// Number to Boolean conversion 
let m1 = 0//When number is 0 then it convert in false otherwise true for every number
let m2 = 1
let m3 = 100
let m4 = -434;//It also give true for negative number
console.log(Boolean(m1), Boolean(m2), Boolean(m3), Boolean(m4))

//Null conversion for String, Number, Boolean
let var1 = null;
console.log("Null to String: ", String(var1),"And it's type is",typeof(String(var1))) 
console.log("Null to Number: ", Number(var1),"And it's type is",typeof(Number(var1))) 
console.log("Null to Boolean: ", Boolean(var1),"And it's type is",typeof(Boolean(var1))) 


//Null conversion for String, Number, Boolean
let var2;
console.log("Undefined to String: ", String(var2),"And it's type is",typeof(String(var2))) 
console.log("Undefined to Number: ", Number(var2),"And it's type is",typeof(Number(var2))) 
console.log("Undefined to Boolean: ", Boolean(var2),"And it's type is",typeof(Boolean(var2))) 



