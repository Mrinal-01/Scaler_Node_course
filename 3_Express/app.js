/*
Express.js is a framework which is used by node js to build
server side applications.

Features:- Fast and robust applications 
           Middleware
           Routing(URL/get/put/post)
*/


//As it is therd party package we have to import it
// The pakage return as a function
const express =require('express')

//this function will return a lot of methods to get 
//those methods we have to call the method like below:-
//when we use app it will give access to all the methods
const app=express();

// get, post, put, delete etc methods

//This array is for route parameter:-
const courses=[{id:1, name:"Javascript"},
{id:2, name:"Java"},
{id:3, name:"Python"}]

//it used to access some data from a particular resourse
//it can be database, can be a api
//It take 2 arguments:- 1. its route from where data to be acessed
//                      2. 2 objects req, res
app.get('/',(req,res)=>{
    res.send("Hello this first Express app!")
})

//Lets create a different route to a different address
app.get('/about',(req,res)=>{
    res.send("We created a about")
})

app.get('/contact',(req,res)=>{
    res.send("Contact us at abcd.com")
})
/*
NOTE:- Remember one thing, before updating in code
u have to stop the server which is running already. 
Otherwise u will get error

NOTE:-
------
nodemon:- When u do changes in your code, we need to stop the server
          and again need to start the server. Here, nodemon
          came into rescue it will update the server with latest
          update.

          NOTE:- use npm install -g nodemon instead of
                     npm install i nodemon as it will 
                     give error during run 
                     nodemon app.js
*/



//To see the response you have to use below code
//We have to specify a port where we can see what have developed
//This is our default router(the port)
// app.listen(5500,(err)=>{
//     if(err) console.log(err);
//     console.log("Server listening to 5500");
// })




//Rout Parameter:-








/*
Here u can see that wee assign the port no statically 
When we are in production env we assign the port dynamically

Environment Variable:-
This variable value will change according to the env
u are working.
*/

const port=process.env.PORT||5500



/*
Route Parameter:- Using Id's
where the id's value will store for that we have to use 
param operator
*/
// app.get('/contact/:id',(req,res)=>{
//     // console.log(req.params);

//     res.send(req.params.id)

// })



//Accessing route parameter from array:-

app.get('/courses/:id',(req,res)=>{
    console.log(req.params);
    let course=courses.find(course=>course.id===parseInt(req.params.id))
    
    if(!course) res.status(404).send("The course not exists")
    res.send(course)
})

// app.get('/courses/:coursename',(req,res)=>{
//     console.log(req.params.coursename);
//     let course=courses.find(course=>course.name===req.params.coursename)
//     res.send(course)
// })

/*
    Sometimes we search for a course which not available that time it will
    return a blank page for that how we will handle this, for that we 
    have some status code:-
    404 :- The resource is not available
*/


app.listen(port,(err)=>{
    if(err) console.log(err);
    console.log(`Application is running in port no ${port}`);
})