// When returning a Promise

// function fetchAllContent(){
//     return new Promise((res,rej)=>{
//         res("SRIRAM GOKUL")
//     })
// }

// fetchAllContent()
// .then((result)=>console.log(result))
// .catch((err)=> console.log(err))


// Async Function 

// Async funtion always returns a Promise

async function fetchAllContent(){
    return "DATA";
}

//fetchAllContent()
//.then((result)=> console.log(result));

// Async & Await

function delay(ms){
    return new Promise((res,rej)=> setTimeout(res,ms))
}

async function loggers(timer){
    console.log("Start")
   await delay(timer);
    console.log("End");
    console.log("pause")
    console.log("pause")
    console.log("pause")
    await delay(timer);
    console.log("pause")


}

//loggers(5000)


async function ErrorContent(){
     throw new Error("Error srg")
}
//ErrorContent()
//.then((result)=> console.log(result))
//.catch((err)=> console.log(err))

async function fetchedContent(){
   const result = await fetchAllContent();
   console.log(result);
}
//fetchedContent();

// Normal Function with Promises
function xyz(data){
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            if(data == "error"){
                rej("Fetched Data is Error")
            }else{
                res("Fetched Data is Resolved")
            }
        },3000)
    })
}

function abc(){
    xyz("Sriram Gokul")
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
}
//abc()

// Async & Await Functions
// Error Handling in Async & Await

 function fetchContent(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(data == "error"){
                rej("Fetched Data is Error")
            }else {
                res("Data is Resolved")
            }
        },3000)
        
    })
}


// Process of Function

function enterCardNumber(cardNumber){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(cardNumber.length < 5){
                rej("Enter Valid Card Number")
            } else if(cardNumber.length < 7){
                res("Savings")
            }else {
                res("Current")
            }
        },3000)
    })
}

function displaySelectedCard(cardType){
    console.log(`${cardType} is Activated`);
}


function selectOption(option){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(option === "Withdrawl"){
                res("withdraw");
                console.log("Selected Withdrawl");
            } else if(option === "debit"){
                res("debit");
                console.log("Selected Debit")
            } else{
                rej("Please select a option")
            }
        },2000)
    })
}

function enterSecurityPin(optionSelected){
    return new Promise((res,rej)=>{
        if(optionSelected === "Withdrawl"){
            res("Withdraw")
            console.log("Withdraw account is Processed")
        }else if(optionSelected === "debit"){
            res("debiting")
            console.log("debiting your Account")
        } else{
            rej("Error Processing Your Request")
        }
    });
}


// enterCardNumber("56461")
// .then((data)=>  {return data})
// .then((data1)=> displaySelectedCard(data1))
// .then((data2)=>{return selectOption("debit")})
// .then((data3)=>enterSecurityPin(data3))
// .catch((err)=> console.log(err))



// Always function should with async keyword
// async always returns a promise
// we can use await keyword only in async function
// returned promises can be stored in a variable
// for Error handling we can use try & catch method
async function bankOperation(cardNumber){
    try{
        const cardType = await enterCardNumber(cardNumber);
        displaySelectedCard(cardType);
        const option = await selectOption("Withdrawl");
        await enterSecurityPin(option)

    }catch(error){
        console.log("error",error)
    }
}
bankOperation("5799632566");


// fetch a promise

    // Guvi Class Timeing & Data - Oct 5, 2023 / 2.20hrs
    async function fetching(){
        const result = await fetch("https://restcountries.com/v3.1/all")
        const finalresult = result.json();
        console.log(finalresult);
    
    }

    fetching();
