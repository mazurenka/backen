let http = require('http');


let server = http.createServer((req, res) => {
    console.log('some request')
    res.end();
});

server.listen(1234)


console.log(http);





