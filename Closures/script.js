// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("3");

// },1000)
// console.log("4");
// console.log("5");
// console.log("6");

// Closures
function abc(){
    console.log("*****Closures****")
    var a = 10;
    console.log(aa);
    function xyz(){
        console.log(a);
        console.log(bb);
    }
    xyz();
}
var aa = 1056;
var bb = 589634;

abc();

// Curring functions

function first(a){
    return function second(b){
        console.log(a,b)
    }
}

first(24)(53);

// Debouncing in js
const input = document.querySelector("input");
input.addEventListener("input",()=>{
    console.log("Fetching Data")
})