// Importing http module
const http = require('http');
// Importing stats module
const stats = require('./pcRamUsage.js');
// Declaring host
const host = 'http://localhost';
// Declaring port
const port = 3000;

// Creating the server
http
  .createServer((req, res) => {
    var url = req.url;
    
    // Creating a secret route
    if (url === '/stats') {
      res.end(JSON.stringify(stats, null, 2));
    } else {
      res.end('<h1>Welcome</h1>');
    }
}).listen(port, () => console.log(`Server is running on ${host}:${port}`));
