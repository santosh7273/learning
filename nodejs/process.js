//console.log(process)
let e1=process.env.APP_ENV || 'development'
console.log(e1)
console.log(process.cwd())
try{
    process.chdir("/tmp")
    console.log(process.cwd())
}
catch(err){
    console.log(`Something went wrong:${err}`)
}