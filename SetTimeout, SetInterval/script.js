let intervalDigit = 1;

setInterval(()=>{
    //console.log(intervalDigit);
    intervalDigit++;
},1000);


// CallBacks
function someAsync(cb){
    setTimeout(()=>{
        console.log("a");
        cb();   
    },2000)
}

function followedFunc(){
    console.log("b");
}

someAsync(followedFunc);
