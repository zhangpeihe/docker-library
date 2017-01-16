const http = require('http');
const handleRequest = (request, response) => {
  console.log('Received request for URL: ' + request.url);
  var os=require('os'),
  iptable={},
  ifaces=os.networkInterfaces();
  for (var dev in ifaces) {
    ifaces[dev].forEach(function(details,alias){
      if (details.family=='IPv4') {
        iptable[dev+(alias?':'+alias:'')]=details.address;
     }
    });
  }
  response.writeHead(200);
  response.end('Hello World!'+iptable);
};
const www = http.createServer(handleRequest);
www.listen(9080);
