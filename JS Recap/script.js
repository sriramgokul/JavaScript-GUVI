// ***** ES5 vs Es6
 // ES6
// 1) Normal Function
// 2) Arrow Function, IIFE, Anonmoyous Function
// 3) Template Literals
// 4) Object & Array Destructing

// **** Scoping - var vs let vs const

var a = 10; // a is a Global Object.
let xyz = 53; // xyz is a Global Object.
const qwe = 88;
function givenData(){
    if(true){ // Block Scope
        var x = 10;
        let z = 12;
        const r = 24;
        console.log(x);
        console.log(z);
        console.log(r);
        console.log(xyz);
        console.log(qwe);
    }
    console.log(x);// Var can be accessed here.
    //console.log(z);// Not defined. Let can be only accessed inside a block scope.
    //console.log(r); // Not Defined. Const can be only accessed inside a block scope.
}
// console.log(x); // Not Defined. Var can not be accessed outside the function.

givenData();

// ***** arrow functions

    // 1) Normal Function
    getA(); // can be executed like this.
            // Normal function need explicit return keyword.
    function getA(){
        var a = 26;
        console.log(a);
    }

    // 2) Arrow Function
    //getArrow(); // Cannot access 'getArrow' before initialization
                // Arrow function does not need explicit return keyword,if it is a single line.In multi line codes,return keyword is required.
    const getArrow = ( )=>{
        var b = 45;
        console.log(b);
    }

// **** use of this keyword(lexical scoping)
        // OuterScope have access to InnerScope.

        function OuterScope(){
            var x = 125;
            //console.log(tyu); // Not defined. InnerScope cannot access the outerscope.
            return function InnerScope(){
                console.log(x);
                var tyu = 243;
            }
        }
const result = OuterScope();
result();

// ***** template literals

let pername = "Sriram Gokul";
console.log(`Hi my name is ${pername}`);
 
// Normal Way
    let state = true;

    if(state === true){
        console.log("State is True");
    }else{
        console.log("State is False");
    }

    // Ternary Operators
    state === true ? console.log("You are Correct") : console.log("You are Wrong");


// **** spred & rest prarameter

    // ** Spread Operator

// In JavaScript, the spread operator, represented by three dots (...), allows you to expand an iterable object, such as an array, string, or object literal, into its individual elements. This is particularly useful when:
// 1) Concatenating arrays: You can combine multiple arrays into a single array by using the spread operator.
// 2) Copying arrays: Create a shallow copy of an array.
// 3) Merging objects: Combine multiple objects into a single object.
// 4) Passing arguments to functions: Pass individual elements of an array as arguments to a function.

const obj = {
    name : "Sriram Gokul",
    age : "30",
    batch : "BWD51"
}

function editObj(newObj,newBatch){
const newObject = {...newObj, batch: newBatch}; // using spread Operator here.At the same time,we can add some new data.
console.log(newObject);
}

editObj(obj,"TamilB53");


 // ** Rest Operators

 // In JavaScript, the rest operator, represented by three dots (...), allows a function to accept an indefinite number of arguments as an array.

 function sum(...numbers){
    return numbers.reduce((acc,value)=> acc + value, 0);
 }

 console.log(sum(1,5,3,8,7,9,2));

// **** array & object destructure

 //Array

const arr = ["sriram","Gokul","Rakesh","Dinesh"];
const [names1,names2,names3] = arr; // This is called destructuring.
console.log(names1);
console.log(names2);
console.log(names3);

// Object Destructuring

const objectHigh = {
    name1 : "Mark Zuckerberg",
    age : "45",
    company : "Meta"
}

const {name1: newName,age : newAge,company,education = "DropOut in  Mss University"} = objectHigh;
console.log(newName);
console.log(newAge);
console.log(company);
console.log(education);

// Task 

const taskData = {
    userInfo : {
        name : "Gokul",
        position : "Mentor",
    },
    batches : ["142", "563", "789"],
}
{taskData.userInfo.name = "SRIRAM",taskData.userInfo.position = "Lead Engineer"}
console.log(taskData);

// **** property shorthand
    const orderby = "SRIRAM GOKUL";
    const deliveryAt = "Chennai";
    const productName = "Iphone";
    const productPrice = "150000";

    // 1st way of Writing the code
    const package = {
        orderby : orderby,
        deliveryAt : deliveryAt,
        productName : productName,
        productPrice : productPrice
    }

    console.log(package);

    // 2nd way of Writing the code
    // when the key & variable have same names, we can write like this also.

    const package2 = {
        orderby,
        deliveryAt,
        productName,
        productPrice
    }

    console.log(package2);

