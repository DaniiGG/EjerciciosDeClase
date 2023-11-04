window.onload = function () {       
    const form = document.getElementById("registroForm");
    const nombreInput = document.getElementById("firstName");
    const apellidosInput = document.getElementById("lastName");
    const confirmpass = document.getElementById("confirmPassword");
    const telefonoInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const password = document.getElementById("password");
    const errorNombre = document.getElementById("errorNombre");
    const errorApellidos = document.getElementById("errorApellidos");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorEmail = document.getElementById("errorEmail");
    const errorContraseña = document.getElementById("errorContraseña");
    const errorContraseña2 = document.getElementById("errorContraseña2");

    form.addEventListener("submit", function (event) {
        let valid = true;

        if (!validarNombre()) {
            valid = false;
        }

        if (!validarApellidos()) {
            valid = false;
        }

        if (!validarTelefono()) {
            valid = false;
        }

        if (!validarEmail()) {
            valid = false;
        }

        if (!validarContraseña()) {
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Evita que el formulario se envíe si hay errores
        }
    });

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

            function validarContraseña() {
                const contraseña = password.value;
                const confirmacion = confirmpass.value;
            
                if (!contraseña || contraseña.length < 8) {
                    errorContraseña.textContent = "La contraseña debe tener al menos 8 caracteres";
                    return false;
                } else {
                    errorContraseña.textContent = "";
                }
            
                if (contraseña !== confirmacion) {
                    errorContraseña2.textContent = "Las contraseñas no coinciden";
                    return false;
                } else {
                    errorContraseña2.textContent = "";
                }
            
                return true;
            }



            nombreInput.addEventListener("blur", validarNombre);
            apellidosInput.addEventListener("blur", validarApellidos);
            
            telefonoInput.addEventListener("blur", validarTelefono);
            emailInput.addEventListener("blur", validarEmail);
            password.addEventListener("blur", validarContraseña);
            confirmpass.addEventListener("blur", validarContraseña);
}