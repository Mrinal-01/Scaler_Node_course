//file

const fs=require('fs')

//Reading a file

// let fileContent=fs.readFileSync(`${__dirname}\\f2.txt`) // Use `${__dirname}\\file_name as not able to find the path.

// console.log("File2 Data ->", fileContent);  // Here u will get a buffered value like this: <buffer 49 20 61> 

// console.log("File2 Data ->"+fileContent); // We have to use + to concatenate the data 


//Writing into a file

// fs.writeFileSync('f2.txt',"I am File 2!")

//Append data

// fs.appendFileSync('f2.txt',"\nHi I am appended Data")



//Deleting a file

// fs.unlinkSync(`${__dirname}\\f2.txt`)


//-----------------------------------------------------------------------------

//Asynchronous Way of File read

// fs.readFile(`${__dirname}\\f11.txt`,function(err,data){
//     if(err){
//         return console.error(err.message)
//     }else{
//         console.log(data.toString());
//     }
// })
// console.log("Now u are checking Asynchronous way!");


//---------------------------------------------------------------

//Working with Directory

//1. Create a directory:-
// fs.mkdirSync('myDirectory')


//Check the content of directory

// let folderPath='C:\\Users\\mrinal.bera\\Documents\\Node Js\\ScalerCourse\\myDirectory'

// let foldercontent=fs.readdirSync(folderPath)

// console.log("folder content:",foldercontent);


//Check wheather directory exist or not

// console.log(fs.existsSync('myDirectory'));

//Delete a directory
//Before deleting a directory we need to empty the directory
// fs.unlinkSync("C:\\Users\\mrinal.bera\\Documents\\Node Js\\ScalerCourse\\myDirectory\\f1.txt")

// fs.unlinkSync("C:\\Users\\mrinal.bera\\Documents\\Node Js\\ScalerCourse\\myDirectory\\f3.txt")


fs.rmdirSync('myDirectory')