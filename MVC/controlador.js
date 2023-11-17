var miListaLibro;
window.onload=()=>
{
    miListaLibro=new listaLectura;
document.getElementById("btnAlta").addEventListener("click", altaLibro)
}
function altaLibro(){
tit=document.getElementById("inputTit").value;
Aut=document.getElementById("inputAut").value;
año=document.getElementById("inputAño").value;

let nuevoLibro=new libro(tit, Aut, año);
miListaLibro.addLibro(nuevoLibro);
actualizarVista();
}
function actualizarVista(){
    vistaSimple("misLibros", miListaLibro.listaLibros);
}