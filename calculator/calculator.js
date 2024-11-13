let recherch=document.getElementById('recherch')
function calcu(value){
   recherch.value=recherch.value+value
}
function result(){
    if (recherch.value==""){
        alert("please entrer numbers")
    }
    else {
        recherch.value=eval(recherch.value)
    }
}
let clear=document.getElementById('=')
clear.addEventListener('dblclick',function(){
    recherch.value=""
})
