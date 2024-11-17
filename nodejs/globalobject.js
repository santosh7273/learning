console.log(global)
global.sksc="32"
console.log(global)
global.setTimeout(()=>{
    console.log('h11')
},10000)
//or
let p1=()=>{global.setTimeout(()=>{
    console.log('h11')
},10000)
}
p1()
//or 
setTimeout(()=>{
    console.log('h11')
},10000)
