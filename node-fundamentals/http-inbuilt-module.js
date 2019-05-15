/*Ryan Dahl inventor of Node.js created the inbuilt modules which serves with core implementation*/
const http = require('http');

//req: HTTP Request readable stream
//res: HTTP Response writable stream
var cws = http.createServer((req, res) => {
    console.log(res.socket.remoteAddress);//To get the remote address
    if (req.url == '/home') {
        res.write('<h1>Welcome to Home Page</h1>');
        res.end();//Closing the Stream
    } else {
        res.write('<h1>Welcome to Capgemini Web Server</h1>');
        res.end();//Closing the Stream
    }
});

cws.listen(3000, '10.51.120.19', () => {
    console.log(`Web server listening on port 3000 at localhost. 
    Press CTRL + C to stop the server`);
});
