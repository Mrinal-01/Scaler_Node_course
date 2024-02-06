const os=require('os')

// console.log(os.arch());  //Give u architecture 64 or 32 bit

// console.log(os.platform()); //Give u the platform like windows/ubuntu/mac

// console.log(os.networkInterfaces());    //Give u network informations

// console.log(os.cpus()); // Give u cpu information

console.log(os.totalmem());

console.log(os.freemem());

console.log(os.userInfo());

console.log(os.hostname());