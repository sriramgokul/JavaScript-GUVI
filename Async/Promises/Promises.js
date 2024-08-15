// Promise
//  - What is a promise?
//  - Promise States
//  - Promise chain
//  - promise.all()
//  - Use of fetch() & then()

let task = 90;

const placementPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(task >= 80){
            resolve("You are eligible for the Placements")
        }else{
            reject("You are not eligible for the placements")
        }
    
    },2000)

})

placementPromise
.then((result)=> console.log(result))
.catch((result)=> console.log(result));

// Three Different States in Promises
// 1) Pending
// 2) Fullfilled(resolved)
// 3) Rejected


// Promise Chain:

const PromiseChain = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(196);   
    },2000)
})

PromiseChain.then((data)=> {console.log(data); 
                            return data * 2})
.then((data2)=> {console.log(data2)
                            return data2 * 5})
.then((data3)=> console.log(data3))     
.catch((err)=> console.log(err))    

// Promise in Functions

function getName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(name.length == 0){
                reject("Plz Enter a Valid Name")
            } else{
                resolve(name)
            }
        },2000)
    })
}

function getAge(age){
        setTimeout(()=>{
            console.log(`Hi please Enter your ${age}`)
        },2000)
}

function displayDetails(name,age){
    setTimeout(()=>{
        console.log(`Your name is ${name} and your age is ${age}`)
    },2000)
}


getName("SRIRAM GOKUL").then((data)=> {console.log(data)
                            return data
})
.then((name)=> {getAge(30)
                return name
})
.then((data2)=>displayDetails(data2,30) )
.catch((data)=> console.log(data))


// Promises All

const Promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise is called")
        resolve(25)
    },4000)
})

const Promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise is called")
        resolve(50)
    },6000)
})

const Promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise is called")
        resolve(100)
    },8000)
})

Promise.all([Promise1,Promise2,Promise3])
.then((data)=> console.log(data))
.catch((err)=> console.log(err))

// fetch data

fetch("https://restcountries.com/v3.1/all")
.then((res)=> res.json())
.then((data)=>{console.log(data)
                data.forEach((element)=>{
                        const countryObject = {
                            name: element.name.common,
                            flags: element.flags.png,
                            Population : element.population,
                            Region : element.region,
                            Capital : element.capital,
                        }
                        console.log(countryObject);
                        createCountryCard(countryObject);
                })
})
.catch((err)=> console.log("Error :", err))

function createCountryCard(element){
    document.body.innerHTML += `
    <div class="container">
    <img id="flag" src = "${element.flags}" alt="">
    <div class="info">
    <h3>Name: ${element.name}</h3>
    <h4><span>Population : ${element.Population} </span></h4>
    <h4><span>Region : ${element.Region} </span></h4>
    <h4><span>Capital : ${element.Capital}  </span></h4>

    </div>    
    </div>
    `
}