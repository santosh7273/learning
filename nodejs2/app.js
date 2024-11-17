let fs=require('fs')
//let result1=fs.readFileSync('./s1.txt')
//console.log(result1.toString())
//asyncronous
/*fs.readFile('./s1.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})*/
fs.writeFile('./new1.txt',"shdihqdfkjqw",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('suuccess')
        console.log(fs.readFile('./new1.txt',(err)=>{
            if(err){
                console.log(err)
                
            }
            else{
                console.log('siii')
            }
        }))
    }
})
fs.appendFile('./new1.txt',"appendded",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("appended")
    }

})
fs.unlink('./s1.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('siiiiiii')
    }
})