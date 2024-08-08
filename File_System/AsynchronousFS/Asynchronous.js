// Asychronous File in File System.

const fs = require("fs");

// Writing File in Asychronous file.
const write_File = (data) => {
  fs.writeFile("Asynchronous.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data", data);
    }
  });
};

// Read File in Asynchronous File System.
const readFile = () => {
  fs.readFile("Asynchronous.json", "UTF8", (err, data) => {
    if (err) {
      console.log("data not Found ", err);
    } else {
      console.log(data);
    }
  });
};

// Append File In Asynchronous File System.
const append_File = (appenddata) => {
  fs.appendFile("Asynchronous.json",  JSON.stringify(appenddata), (err) => {
    if (err) {
      console.log("File Not Append", err);
    } else {
      console.log("Appended Data",appenddata);
    }
  });
};

// Update File In Asynchronous File System.
const update_File =(updated_data)=>{
  fs.writeFile("Asynchronous.json" , JSON.stringify(updated_data) , (err)=>{
    if(err){
      console.log(err)
    }else{
      console.log("Updated Data",updated_data)
    }
  })
}

// Delete File in Asynchronous File System.
const deletefile = ()=>{
  fs.unlink("Asynchronous.json" , (err)=>{
    if(err){
      console.log("File occured An error" , err)
    }else{
      console.log("File Deleleted SuccsessFully")
    }
  })
}

write_File({ id: 1, name: "Ajit" });
// append_File({ id: 2, name: "Ajit Raut" });
update_File({ id: 2, name: "AjitRaut"})
// deletefile();
// readFile();
