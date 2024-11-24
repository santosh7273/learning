const a=document.getElementById('usin');
const b=document.getElementById('addbtn')
const c=document.getElementById('li_values')
function addfun(){
    if(a.value===''){
        alert("Enter your task");
    }
    else{
        const li1=document.createElement('li')
        li1.textContent=a.value;
        let span=document.createElement('span')
        span.textContent='\u00d7';
        li1.appendChild(span)
        c.appendChild(li1)
        save();
    }
    a.value='';
}
c.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("che");
        save();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        save();
    }
},false);
function sortTasks() {
    const items = Array.from(c.children);
    const sortedItems = items.sort((a, b) => {
        const isCheckedA = a.classList.contains('che');
        const isCheckedB = b.classList.contains('che');
        if (isCheckedA && !isCheckedB) {
            return 1;
        } else if (!isCheckedA && isCheckedB) {
            return -1;
        } else {
            return 0;
        }
    });
    c.innerHTML = '';
    sortedItems.forEach(item => c.appendChild(item));
    save();
}
function save(){
    localStorage.setItem("data",c.innerHTML);
}
function shpp(){
    c.innerHTML=localStorage.getItem("data");
}
shpp();
function updateCounter() {
    let qw = document.getElementById('pppp');
    const uncheckedTasks = document.querySelectorAll('#li_values li:not(.che)').length;
    if(uncheckedTasks===0){
        qw.textContent=`Successfully Completed all Tasks`;
    }
    else if(uncheckedTasks===1){
        qw.textContent=`Only 1 task is pending`;
    }
    else{
        qw.textContent = `${uncheckedTasks} tasks are pending`;
    }
}
document.getElementById('ssss').addEventListener('click', sortTasks);