function InsertCard(callback){
    console.log("Step 1: Your Card is Reading");
    callback();
}

function selectAmount(callback){
    const userInput = prompt("Savings or Current")
    console.log(`Step 2: Savings ${userInput}`)
    callback();
}

function SelectOptions(callback){
    const userInput = prompt("Withdraw or Deposit")
    console.log(`Step 3: You have selected ${userInput} `)
    setTimeout(()=>{
        callback();
    },5000)
}

function EnterSecurity(callback){
    const userInput = prompt("Enter Security Pin")
    console.log(`Step 4: Security Pin ${userInput}`)
    console.log("Processing Your Money")
    setTimeout(()=>{
        callback();
    },2000)
}

function CollectCash(callback){
    console.log("Step 5: Collect your Cash")
}

function WithDrawCash(){
    InsertCard(()=>{
        selectAmount(()=>{
            SelectOptions(()=>{
                EnterSecurity(()=>{
                    CollectCash();
                })
            })
        })
    })
}
WithDrawCash();