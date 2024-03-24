

let myPromise=new Promise(function(resolve,reject){
    const a=4;
    const b=42;
    setTimeout(() => {
        if(a===b){
            resolve("The vaues are equal")

        }
        else{
            reject("The values are not equal")
        }
        
    }, 2000);
})

//Pending state
// console.log(myPromise);

myPromise.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
})
