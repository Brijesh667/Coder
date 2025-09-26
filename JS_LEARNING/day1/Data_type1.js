// for print anything thing we use 
console.log("hello world")

// Primitive data type

// 1.Number 
let a = 10
console.log(a)
console.log(typeof a)
console.log(typeof(a))//We can also pass variable as a parameter

//1.1 Big Number
let big_number = 123232323232323n
console.log(big_number)
console.log(typeof big_number)//It's Output will bigint

// 2.String
let str =  "Hello world"
console.log(str)
console.log(typeof(str))

//3.Null
let v1 = null;//We don't want to assign value of this variable
console.log(v1)
console.log(typeof(v1))//It will show it's type Object that is a initial error in js it's output should null

//4.Undefine
let v2;
console.log(v2)//This will print undefine because we did not assign any value till now
console.log(typeof(v2))//It's type will be undefine

//5. Boolean
let c1 = true;
console.log(c1)
c1 = 0
console.log(typeof c1)

//6.Symbol --->>> will study after


/* --------------------Primitive and Non Primitive data type------------------------
Mutability-->>
    Primitive Data Types->
    These are immutable,
    meaning their values cannot be changed after
    they are created. When you modify a primitive
    variable, you are not altering the original 
    value but rather creating a new value and assigning
    it to the variable.
    Examples include String, Number, Boolean, Null, Undefined, BigInt, and Symbol. 
    let myNumber = 10;
    myNumber = 20; // This creates a new number 20, doesn't modify the original 10.
    
    
    Non-Primitive (Reference)-->>
    Data Types: These are mutable, meaning their values can be changed
    after creation. When you modify a non-primitive variable, 
    you are directly altering the contents of the object or array it 
    references in memory. The primary non-primitive types are Object 
    and Array (which are a specialized form of Object), and Function.
    Example-->>
    let myObject = { name: "Alice" };
    myObject.name = "Bob"; // This modifies the 'name' property of the existing object.


    2. Storage and Access in Memory:
    Primitive Data Types:
    Values are stored directly in the stack memory. When you assign a primitive value to a variable, the actual value is copied.


    Non-Primitive (Reference) Data Types:
    Values (the actual objects/arrays) are stored in the heap memory. Variables holding non-primitive values store a reference (a memory address) to where the actual data resides in the heap. When you assign a non-primitive value to another variable, only the reference is copied, meaning both variables point to the same object in the heap.
    
    This distinction in mutability and memory handling leads to different behaviors when copying or passing values, especially in function arguments. Primitives are passed by value (a copy of the value), while non-primitives are passed by reference (a copy of the reference).


*/










