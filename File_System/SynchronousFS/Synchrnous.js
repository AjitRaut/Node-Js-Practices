const fs = require("fs");
const { json } = require("stream/consumers");

// Writing File In Synchronous File Ststem.
const writefile = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data));
};

// Raeding File In Synchronous File Ststem.
const readfile = () => {
  const data = fs.readFileSync("data.json", "utf8");
  console.log(data);
};

// Appending File In File System.
const append_File = () => {
  const appenddata = {
    id: 2,
    name: "Ajit",
  };

  fs.appendFileSync("data.json", '\n' + JSON.stringify(appenddata) );
};

//Updating File In Synchronous File System.
const update_File = (updated_data) => {
  if (fs.existsSync("data.json")) {
    fs.writeFileSync("data.json" , JSON.stringify(updated_data));
  } else {
    console.log("File Does not Exist");
  }
};

// Deletting File In Synchronous File Syatem.
const deletefile = () => {
  fs.unlinkSync("data.json");
};

writefile({ Id: 1, name: "Ajit" });
// append_File();
update_File({id: 2 , name : "ajit"})
readfile();
// deletefile();



