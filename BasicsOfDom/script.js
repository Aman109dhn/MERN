// let x = document.querySelectorAll("h1")
let x = document.getElementById("p1");
x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor = "red";
})

let y = document.getElementById("p2")

y.addEventListener("mousemove",function(){
    y.style.color = "white";
    y.style.backgroundColor="orange";
})