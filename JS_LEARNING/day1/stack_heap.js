//Primitive Data type take  memory in Stack
//Non-Primitive Data type take memory in Heap


//Primitive Data type
let a = 5
let b = a
console.log(`A = ${a} and B = ${b}`)
b = 10
console.log(`A = ${a} and B = ${b}`)
a = 30
b = 50
console.log(`A = ${a} and B = ${b}`)
//When we change the orginal value then it do not overwritten on the same location 
//It take a new space in memory and destroy previous space 
//whey it happen: because a user can write a biger number or data that can not fit in same memory location

//here we notice tha the a orginal value is not changing by change value of b

let  obj1 = {
    a:12,
    b:30,
    c:12
}

let obj2 = obj1

console.log("obj1: ",obj1)
console.log("obj2:", obj2)
console.log("After changing the value of obj2")
obj2.a = 50
obj2.b = 100
obj2.c = 150
console.log("obj1: ",obj1)
console.log("obj2:", obj2)

//In heap the reference(address) present in stack so when we write obj2 = obj1 it transfer the address so
//When we change obj2 it effect obj1

const var1 = 20
console.log(var1)
// var1 = 23 here we can not change var1 value becaue it is a const

//but when we write a const obj we can change it's value 
const obj  = 
{
    a:3,
    b:4,
    c:5
}
console.log("const obj:", obj)
obj.a = 30
obj.b = 40
obj.c = 50
console.log("changed const obj: ",obj)
//it is possible because we are chaing only value of the obj, here we can not change the address value that is const
obj.n = 4//we can also add a key and value
console.log(obj)
let obj4 = obj
obj4.g = 5
console.log("obj: ",obj,"obj4: ",obj4)
let obj6 = {
    a:2
}
// obj = obj6
// console.log(obj) // It is not allow because it giving a new address in obj that not allowed because obj is const  

//so const obj can be modified not it's address 

//After execute the program all memory will realsed




let ob = {
    a:3,b:43,c:4

}
console.log(`obj: ${JSON.stringify(ob)}`)

let s = String(ob)
console.log(s)
