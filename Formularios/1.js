function validarMayuscula(valor) {
    const regex = /[A-Z]/; // Expresión regular que busca al menos una mayúscula
    return regex.test(valor);
  }
  
  function validarCaracteresEspeciales(valor) {
    const regex = /[!@#$%^&]/; // Expresión regular que busca al menos uno de los caracteres especiales
    return regex.test(valor);
  }
  
  function validarCorreo(valor) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Expresión regular para validar un correo electrónico
    return regex.test(valor);
  }
  
  function validarTarjetaCredito(valor) {
    // Expresión regular que verifica el formato de una tarjeta de crédito (16 dígitos sin espacios ni guiones)
    const regex = /^\d{16}$/;
    return regex.test(valor);
  }
  
  function validarLongitud(valor) {
    return valor.length >= 8;
  }
  
  function validarNumero(valor) {
    const regex = /\d/; // Expresión regular que busca al menos un dígito
    return regex.test(valor);
  }