//Non-Primitive Data type

//Array
let arr1 = [1,2,3,4,5,"Brijesh kumar",2,3,4]
console.log(arr1)
console.log(typeof arr1)

// Object

let obj = {
    Name:"Brijesh kumar",
    Id: 23036115,
    Class:"Btech IT, 3rd year"
}

console.log(obj)
console.log(obj.Name)
obj.Name = "Rahul"//It change the obj.Name value 
console.log(obj)
console.log(typeof obj)

let fun1 = function(){
    console.log("hello world")
    return 10
}

fun1();//It will print only function console.log() value not print return value
console.log(fun1())//It will print both console.log() and return value
//If function do not returning any value and we call it in console.log() it will print undefined 
let fun2 = function()
{
    console.log("This function is not returning any value")
}

console.log(fun2())//First It will print function console value then print undefined
