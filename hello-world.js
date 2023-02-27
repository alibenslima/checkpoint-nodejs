console.log("HELLO WORLD");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Hello World</h1>\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// writeFile function with filename, content and callback function
// include node fs module

// metre bloc en commentaire pour une seul creation de fichier
// var fs = require("fs");
// fs.writeFile("welcome.txt", "HELLO Node", function (err) {
//   if (err) throw err;
//   console.log("File is created successfully.");
// });

var fs = require("fs");

// Use fs.readFile() method to read the file
fs.readFile("welcome.txt", "utf8", function (err, data) {
  // Display the file content
  console.log(data);
});

console.log("readFile called");
