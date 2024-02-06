/*
Child Process:- Child process is a node module which is used in script to create sub-processes
                U can perform different tasks with your script by using diff methods.

                Example:- we can use calc in cmd to open calculator, same we will do using cp

        execSync:- This method will synchronously execute the method or mentioned sub-process
*/

const cp=require('child_process')

// cp.execSync('calc') // It will open calculator

cp.execSync('start chrome https://www.scaler.com/topics/nodejs/')  // It will open the link in chrome.

// console.log("Output: "+cp.execSync(' ./1.Node_Moule_System/node demo.js'));

// cp.execSync('node demo.js')