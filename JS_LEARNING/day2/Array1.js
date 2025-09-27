let arr1 = [1,2,3,4,5,6,"Brijes kumar",true,false,3,'34']

console.log(arr1)


//length of aray
console.log(arr1.length)
console.log(arr1[4])

console.log(arr1[4]+arr1[3])
console.log(arr1[4]+arr1[6])

console.log(arr1.at(5))//which element present at given index
//in arr[] we can not give negative value,, if we try then it will give undefined 
console.log(arr1[-1])
console.log(arr1[-4])

//at() can take negative value,, Negative value start from end -1,-2,-3,-4,-5,-6....
console.log(arr1.at(-1)) 

const arr2 = arr1//hera arr1 giving it's address to arr2
console.log(arr2)
console.log(arr1==arr2)

arr2.push("Rahul")
console.log(arr1)
console.log(arr2)
//here arr1 and arr2 both are point to same address or array,, so if we change in any array, arr1 or arr2 it effect in both

//To create a defferent array, like this 
const arr3 = structuredClone(arr1)//here structuredClone(arr1) is creating clone of arr1 that has a different address
console.log(arr3==arr1)

//push and pop operation 
//push-> it push element at the end,, input-> pushing element
//pop-> it remove element from end,, no need to pass any number

let a1 = [1,2,3,"Brijesh kumar",23,3,3,4]
a1.push(2,3,4)
console.log(a1)
//we can push 1 element, multiple element, or a array
a1.pop()
console.log(a1)//remove element from end
//push at starting
a1.unshift(10,20,30)//it push element at starting
console.log(a1)

//pop from start
a1.shift()
console.log(a1)

delete a1[0]//this only delete value,, but empty sapce is ther
console.log(a1)//<1 empty item>
