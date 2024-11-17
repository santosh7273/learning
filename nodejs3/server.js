let http=require('http')
let url=require('url')
let eh=(req,res)=>{
    let pu=url.parse(req.url,true)
    if(pu.pathname==='/' && req.method==='GET'){
        res.end("this is home page")
    }
    if(pu.pathname==='/about' && req.method==='GET'){
        res.end("this is about page")
    }
    else{
        res.end('error')
    }
}
let server=http.createServer(eh)
let PORT=3000;
server.listen(3000,()=>{
    console.log(`the server is running on http://localhost:${PORT}`)
})