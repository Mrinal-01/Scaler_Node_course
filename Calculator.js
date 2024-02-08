/*
How use Module:-
step1: Create all the fucntions
step2: module.exports={
    make the function Key:value pair
}
step3: Call from different module like, const variable=require('./module_name')
step4: call the methods with the variable name like, variable.function_name

*/




function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}

module.exports={
    addition:add,
    substraction:sub,
    multiplication:mul,
    division:div
}