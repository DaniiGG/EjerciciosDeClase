window.onload = function () {
const normal = document.getElementById("normal");
const marco = document.getElementById("marco");
const body = document.getElementById("bodyamarillo");
const minimalista = document.getElementById("minimalista");
const invisible = document.getElementById("invisible");

normal.addEventListener("click", ()=> {
    body.style.backgroundColor="lightyellow";
    marco.style.border="solid","black";
    marco.style.padding="5px";
    marco.style.backgroundColor = "yellow";
    invisible.style.color="black";
    body.style.fontFamily="Arial";
    
});
minimalista.addEventListener("click", ()=> {
    invisible.style.color="white";
    body.style.backgroundColor="white";
    marco.style.backgroundColor = "white";
    marco.style.border="white";
    body.style.fontFamily="Times New Roman";
});
}