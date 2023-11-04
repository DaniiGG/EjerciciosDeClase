window.onload = function () {
    function crearCookie(nombre, valor, minutos) {
        const fechaExpiracion = new Date();
        fechaExpiracion.setTime(fechaExpiracion.getTime() + (minutos * 60 * 1000));
        const expires = "expires=" + fechaExpiracion.toUTCString();
        document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
    }

    function obtenerCookie(nombre) {
        const nombreCookie = nombre + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(nombreCookie) == 0) {
                return cookie.substring(nombreCookie.length, cookie.length);
            }
        }
        return null;
    }

    function borrarCookie(nombre) {
        document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    const nombreUsuario = obtenerCookie("nombreUsuario");
    if (nombreUsuario) {
        document.getElementById("nombreUsuario").innerHTML = nombreUsuario;
        document.getElementById("saludo").style.display = "block";
        document.getElementById("formulario").style.display = "none";
    } else {
        document.getElementById("saludo").style.display = "none";
        document.getElementById("formulario").style.display = "block";
    }

    document.getElementById("btnSaludar").addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        if (nombre) {
            crearCookie("nombreUsuario", nombre, 5);
            document.getElementById("nombreUsuario").innerHTML = nombre;
            document.getElementById("saludo").style.display = "block";
            document.getElementById("formulario").style.display = "none";
        }
    });

    document.getElementById("btnCerrarSesion").addEventListener("click", function () {
        borrarCookie("nombreUsuario");
        document.getElementById("saludo").style.display = "none";
        document.getElementById("formulario").style.display = "block";
    });
}