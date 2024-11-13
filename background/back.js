let body=document.querySelector("body")
const color1=document.getElementById("color1")
const color2=document.getElementById("color2")
const value=document.getElementById('value')
color1.addEventListener("input",function x(){body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")"
value.innerHTML=body.style.background
}
)
color2.addEventListener("input",function x(){body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")"
    value.innerHTML=body.style.background
}
)
