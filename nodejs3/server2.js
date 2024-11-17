let http=require('http')
let url=require('url')
let fun1=(req,res)=>{
    let pau=url.parse(req.url,true)
    console.log(pau.pathname)
    let x=pau.pathname;
    if(x==='/'){
        res.end('this is ')
    }
    else{
    res.end('dsfja')
    }
}
let server=http.createServer(fun1)
server.listen(1000,()=>{
    console.log('the server is running at http://localhost:1000')
})