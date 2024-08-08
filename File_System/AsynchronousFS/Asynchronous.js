// Asychronous File in File System.

const fs = require("fs");

// Writing File in Asychronous file.

const write_File = (data) => {
  fs.writeFile("Asynchronous.json", JSON.stringify(data) , (err)=>{
   if(err){
 console.log(err)
   }else{
    console.log("data" , data)
   }
  });
};
write_File({ id: 1, name: "Ajit" });
