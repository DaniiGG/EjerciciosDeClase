window.onload = function () {
 //Número de enlaces totales   
const enlaces = document.getElementsByTagName('a');
const numeroEnlaces = enlaces.length;
console.log('Número de enlaces de la página: ' + numeroEnlaces);

// Dirección a la que enlaza el penúltimo enlace
if (numeroEnlaces >= 2) {
    const penultimoEnlace = enlaces[numeroEnlaces - 2];
    const direccionPenultimoEnlace = penultimoEnlace.getAttribute('href');
    console.log('Dirección a la que enlaza el penúltimo enlace: ' + direccionPenultimoEnlace);
}

// Número de enlaces que enlazan a google
let enlacesAGoogle = 0;
for (let i = 0; i < numeroEnlaces; i++) {
    if (enlaces[i].getAttribute('href') === 'https://www.google.com') {
        enlacesAGoogle++;
    }
}
console.log('Número de enlaces que enlazan a google: ' + enlacesAGoogle);

// Número de enlaces del tercer párrafo
const tercerParrafoEnlaces = document.getElementsByTagName('p')[2].getElementsByTagName('a').length;
console.log('Número de enlaces del tercer párrafo: ' + tercerParrafoEnlaces);
}