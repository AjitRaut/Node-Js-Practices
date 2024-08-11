const http = require("http");

const server = http.createServer((req, res) => {
  const data = {
    name: "ajit",
    status: "succses",
    personalinfo: {
      age: 21,
      qualification: "BCA",
    },
  };

  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(data));
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
