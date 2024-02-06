/*
Points:-
        1. Node Js does not support window object.  
        2. Node js code follow module scope means, the code written in a file has the scope within the file.
        3. Below code output:- undefined, due to moduler scope
*/




let name="Mrinal"
console.log(global.name);
