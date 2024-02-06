//package.json is a json file that will track your node project, like what package you installed, version, details of the package everything will be ther, also different dependecies ect


//Regarding gitignore:- When we create a project if we commit all the package that user can download and use the repo size will be huge, so we ignore the file in git.

const figlet=require('figlet')

// figlet('MB', function(err,data){
//     if(err){
//         console.log("Something went wrong!");
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })


figlet.text(
    "M",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );