let http=require('http')
let url=require('url')
let employees=[
    {
        id:1,
        name:'sk',
    },
    {
        id:2,
        name:'sk1',
    },
    {
        id:2,
        name:'sk2',
    }
]
function dab(req,res){
    let parsedurl=url.parse(req.url,true).path
    let sp1=parsedurl.split('/')
    console.log(sp1)
    if(sp1[1]=='employees' && req.method=='GET' && !sp1[2]){
        res.end(JSON.stringify(employees))
    }
    else if(sp1[1]=='employees' && req.method=='GET' && sp1[2]){
        let emp1=employees.find((emp)=>emp.id==parseInt(sp1[2]))
    if(emp1){
        res.end(JSON.stringify(emp1))
    }
    else{
        res.end('erro')
    }
}
}
let server=http.createServer(dab)
server.listen(5000,()=>{
    console.log('server is running')
})