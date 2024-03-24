function myMiddleware2(req,res,next){
    console.log("I am the second Middleware");
    next()
}

module.exports=myMiddleware2;