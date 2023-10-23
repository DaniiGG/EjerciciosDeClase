
        const canvas = document.getElementById("canvas");
        const clearLineButton = document.getElementById("limpiarLinea");
        const clearCanvasButton = document.getElementById("limpiarCanvas");

        const numfilas = 10;
        const numcolumnas = 10;

        var pintar = "white";

        var erasing = false;

        window.onload = function () {
            createCanvas();
            clearLineButton.addEventListener("click", limpiarLinea);
            clearCanvasButton.addEventListener("click", limpiarCanvas);
        };

        function createCanvas() {
            for (var i = 0; i < numfilas; i++) {
                const fila = document.createElement("tr");
                canvas.appendChild(fila);

                for (var j = 0; j < numcolumnas; j++) {
                    const celda = document.createElement("td");
                    fila.appendChild(celda);

                    celda.onmousemove = function (e) {
                        if (e.ctrlKey) {
                            celda.style.backgroundColor = "red";
                        } else if (e.shiftKey) {
                            celda.style.backgroundColor = "blue";
                        }
                        
                    };
                }
            }
        }

        function limpiarLinea() {
            erasing = true;
            celda.onmousemove = function (e) {
                if (e.Key) {
                    celda.style.backgroundColor = "white";
            
        }
    }
        }
        function limpiarCanvas() {
            const celdas = document.getElementsByTagName("td");
            for (const celda of celdas) {
                celda.style.backgroundColor = "white";
            }
            erasing = false;
            pintar = "white";
        }
 