const http = require("http");
const fs = require("fs")


const PORT = 2000;
const hostname = 'localhost'
const home = fs.readFileSync("./index.html","utf-8")



const server = http.createServer((req,res) => {
    if(req.url==="/"){
        return res.end(home)
    }
    if(req.url==="/about"){
        return res.end("<h1>ABOUT PAGE</h1>")
    }
    if(req.url==="/contact"){
        return res.end("<h1>CONTACT PAGE</h1>")
    }
    if(req.url==="/call"){
        return res.end("<h1>HOME PAGE</h1>")
    }
    if(req.url==="/services"){
        return res.end("<h1>SERVICES PAGE</h1>")
    }
    else
        return res.end("404 Page not found")
    
});
server.listen(PORT,"localhost",() => {
    console.log(`Server is working on http://${hostname}:${PORT}`);
})
