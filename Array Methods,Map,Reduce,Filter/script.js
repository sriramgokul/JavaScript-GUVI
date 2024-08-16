// Methods in  Array
// Impact in Original Array

const arr = [1,5,3,6,7,9,58,99,6,4,2];

// ** push method
arr.push(258);// adds a value in the array at the last index.
console.log(arr);

// ** pop method

arr.pop(); //Deletes the last index value in the array.
console.log(arr);

// ** unshift method

arr.unshift(63); //addes a value to the array in the fist index.
console.log(arr);

// ** shift method
arr.shift(); // Deletes a value in the array of first index.
console.log(arr);

// ** sort method

arr.sort((a,b)=> a-b);
console.log(arr);

// ** reverse method
arr.reverse();
console.log(arr);


// ****** Doesn't impact the original Array
 // It returns a new Array or value.
 // It can concat two arrays also.

const newArr = ["a","b","c"];
const qwe = ["g","h","j"];


// ** concat method

const newArr2 = newArr.concat("d");// without saving the return value in a variable,we won't be able to see the result.
console.log(newArr2);

// Concating two Arrays also.
const newArr3 = newArr.concat(qwe);
console.log(newArr3);

// **** forEach Method

// forEach method dosen't return any new array.
//It can be used only to iterate or reading purpose.


// ***** Map,Filter,Reduce Methods

// ** Map Methods
// Always returns a new Array.  

const newMapArr = [5,4,7,9,3,5,8,1];

const returnednewArr = newMapArr.map((value,index,accArr)=>{
    return value * 3;
})

console.log(returnednewArr);

// **Filter Method
// Always returns a new Array.  
// we should put a condition.
const filteredArr = newMapArr.filter((value,index,accArr)=>{
    return value % 2 == 0; //condition (Not eqaul to 8)
})

console.log(filteredArr);


// ** Reduce
// reduce does not return a new Array.
// reduce returns  a value.

const reduced = newMapArr.reduce((acc,value,index,accArr)=>{
    return acc += value;
},5)
console.log(reduced);

// ** Chaining of MRF

const mrf = newMapArr.map((val)=> val * 7).filter((val)=> val %2 ==0).reduce((acc,val)=>(acc += val),3)
console.log(mrf);