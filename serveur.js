const http = require("http"); 
http.createServer((request, response)=> 
{ 
 console.log('branchement sur le port 8888')
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("Hello WorldSimon"); 
 response.end(); 
}).listen(8888);