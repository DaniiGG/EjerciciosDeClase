var modeloDatos={
    "notas":[]
}
window.onload=()=>{


    document.getElementById("boton").addEventListener("click", nuevanota);


    if(window.localStorage.getItem("notas")){
        console.log("Existe");
        modeloDatos=JSON.parse(window.localStorage.getItem("notas"));
        muestraNotas(modeloDatos.notas);

    }else{
        console.log("No Existe");
    }
}
function nuevanota(){
    textoNota=document.getElementById("input").value;
  

    fecha=new Date().getSeconds();
    //creo objeto NOTA
    objetoNota={"titulo":textoNota,
                "fecha":fecha,};

    modeloDatos.notas.push(objetoNota);

    window.localStorage.setItem("notas", JSON.stringify(modeloDatos))
    console.log(textoNota);
}

function muestraNotas(arrayNotas){
    ul=document.getElementById("ul");
    ul.innerHTML='';
    for(nota of arrayNotas){
        li=document.createElement("li");
        li.innerHTML=nota.titulo+ " "+ nota.fecha;
        ul.appendChild(li);
    }
}