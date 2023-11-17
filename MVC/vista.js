function vistaSimple(idDiv, arrayLibros){

ul=document.createElement("ul");

for(let libro of arrayLibros){
    li=document.createElement("li");
    li.innerHTML=libro.titulo;
    ul.appendChild(li);
}

document.getElementById(idDiv).appendChild(ul);

}