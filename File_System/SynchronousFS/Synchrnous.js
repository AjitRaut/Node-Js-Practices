const fs = require("fs");

const writefile = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data));
};

const readfile = () => {
  const data = fs.readFileSync("data.json", "utf8");
  console.log(data)
};

const deletefile =()=>{
    fs.unlinkSync("data.json")
} 

// writefile({ name: "ajit" });
// readfile();
deletefile();
