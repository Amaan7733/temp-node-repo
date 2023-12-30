const http = require('http');

const server = http.createServer((req,res) => {
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here ia our short history')
    }
    res.end(`
    <h1>oops!</h1>
    <p> We can't find your page</p>
    <a href="/">back home</a>`)
})

server.listen(5000);