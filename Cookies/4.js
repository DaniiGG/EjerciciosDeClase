window.onload = function () {
    
    
    function crearCookie(identificador, valor, fechaExpiracion) {
        document.cookie = identificador + "=" + valor + "; expires=" + fechaExpiracion.toUTCString() + "; path=/";
    }

   
    function leerCookie(identificador) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.indexOf(identificador + "=") === 0) {
                return cookie.substring(identificador.length + 1, cookie.length);
            }
        }
        return null; 
    }

   
    function borrarCookie(identificador) {
        document.cookie = identificador + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + 7);
    crearCookie("miCookie", "12345", fechaExpiracion);
    
    const valor = leerCookie("miCookie");
    console.log("Valor de la cookie: " + valor);
    
    borrarCookie("miCookie");
}