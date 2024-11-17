let http=require('http')
let url=require('url')
let fun1=(req,res)=>{
    let o1={
        'name':'Santosh',
        'rollno':'22L31A05M5'
    }
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(o1))
}
let server=http.createServer(fun1)
server.listen(1000,()=>{
    console.log('the server is running at http://localhost:1000')
})