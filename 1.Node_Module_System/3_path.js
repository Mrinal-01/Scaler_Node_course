const path=require('path')  //It will actually work with files and their paths

let ext=path.extname('C:\Users\mrinal.bera\Documents\Node Js\ScalerCourse\\1.Node_Module_System\\f1.txt')  //path.extname return file extension

let baseName=path.basename('C:\\Users\mrinal.bera\Documents\Node Js\ScalerCourse\\1.Node_Module_System\\f1.txt') //path.basename will return the file with extension



console.log(ext);

console.log(baseName);

console.log(__filename); //It will return the file path in which u r working

console.log(__dirname);    // It will return the current directory path

