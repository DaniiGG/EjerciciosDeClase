window.onload = function () {
    const form = document.getElementById("registroForm");
    const nombreInput = document.getElementById("nombre");
    const apellidosInput = document.getElementById("apellidos");
    const dniInput = document.getElementById("dni");
    const telefonoInput = document.getElementById("telefono");
    const emailInput = document.getElementById("email");
    const usuarioInput = document.getElementById("usuario");
    const errorNombre = document.getElementById("errorNombre");
    const errorApellidos = document.getElementById("errorApellidos");
    const errorDNI = document.getElementById("errorDNI");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorEmail = document.getElementById("errorEmail");
    const errorUsuario = document.getElementById("errorUsuario");

    
    
    

   
        
 function validarNombre (){
    if (!nombreInput.value.trim()) {
        errorNombre.textContent = "Campo obligatorio";
        return false;
    } else {
       return true;
    }

 }
 function validarApellidos (){
    if (!apellidosInput.value.trim()) {
        errorApellidos.textContent = "Campo obligatorio";
        return false;
    } else {
        return true;
    }
 }
        
 function validarDNI (){
    const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if (!dniInput.value.trim()) {
        errorDNI.textContent = "Campo obligatorio";
        return  false;
    }
    else if (!dniRegex.test(dniInput.value.trim())) {
        errorDNI.textContent = "DNI no válido";
        return false;
    } else {
        return true;
    }
 }

        
        function validarTelefono () {
            const telefonoRegex = /^[0-9]{9}$/;
                if (!telefonoInput.value.trim()) {
                    errorTelefono.textContent = "Campo obligatorio";
                    return false;
                }
                else if (!telefonoRegex.test(telefonoInput.value.trim())) {
                    errorTelefono.textContent = "Teléfono debe contener exactamente 9 dígitos";
                    return false;
                } else {
                    return true;
                }
            }


            function validarEmail(){
                if (!emailInput.value.trim()) {
                    errorEmail.textContent = "Campo obligatorio";
                    return false;
                }
                else if (!emailInput.checkValidity()) {
                    errorEmail.textContent = "Email no válido";
                    return false;
                } else {
                   return true;
                }
            }
        
 
            function validarUsuario(){
                const usuarioRegex = /^(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;
                if (!emailInput.value.trim()) {
                    errorUsuario.textContent = "Campo obligatorio";
                   return false;
                }
                else if (!emailInput.checkValidity()) {
                    errorUsuario.textContent = "Email no válido";
                    return  false;
                } else {
                    return true;
                }

            }
        

        
    

            nombreInput.addEventListener("blur", validarNombre);
            apellidosInput.addEventListener("blur", validarApellidos);
            dniInput.addEventListener("blur", validarDNI);
            telefonoInput.addEventListener("blur", validarTelefono);
            emailInput.addEventListener("blur", validarEmail);
            usuarioInput.addEventListener("blur", validarUsuario);


}