const http = require('http');
const handleRequest = (request, response) => {
  console.log('Received request for URL: ' + request.url);
  var os=require('os'),
  var IPv4,hostName;  
  hostName=os.hostname();  
  for(var i=0;i<os.networkInterfaces().en0.length;i++){  
    if(os.networkInterfaces().en0[i].family=='IPv4'){  
        IPv4=os.networkInterfaces().en0[i].address;  
    }  
  }  
  response.writeHead(200);
  response.end('Hello World! I am '+IPv4);
};
const www = http.createServer(handleRequest);
www.listen(9080);
