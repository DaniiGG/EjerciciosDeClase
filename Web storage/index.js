if(!window.localStorage.getItem("empleados")){
    empleados={
        "employees":[
            {"firstname":"Dani", "lastname":"Escobar"}
        ]
    }
    window .localStorage.setItem("empleados", JSON.stringify(empleados));
}else{
    empleados=JSON.parse(window.localStorage.getItem("empleados"));
    muestraEmpleados(empleados);
}

function muestraEmpleados(datos){
    ul=document.getElementById("ul");
    ul.innerHTML='';
    for (empleado of datos.employees){
        
    }
}