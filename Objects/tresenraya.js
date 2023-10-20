function Jugador(nombre, marca) {
    this.nombre = nombre;
    this.marca = marca;
  }
  
  
  function Tablero() {
    this.celdas = new Array(3).fill(null).map(() => new Array(3).fill(''));
  }
  
  Tablero.prototype.hacerMovimiento = function(fila, columna, marca) {
    if (this.celdas[fila][columna] === '') {
      this.celdas[fila][columna] = marca;
      return true; 
    }
    return false; 
  }
  
  Tablero.prototype.dibujarTablero = function() {
    for (let fila = 0; fila < 3; fila++) {
      let row = '';
      for (let columna = 0; columna < 3; columna++) {
        row += this.celdas[fila][columna] || ' ';
        if (columna < 2) row += ' | ';
      }
      console.log(row);
      if (fila < 2) console.log('---------');
    }
  }
  


  Tablero.prototype.verificarGanador = function() {
    const combinacionesGanadoras = [
      
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];
  
    for (const combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      if (this.celdas[a[0]][a[1]] === this.celdas[b[0]][b[1]] && this.celdas[a[0]][a[1]] === this.celdas[c[0]][c[1]] && this.celdas[a[0]][a[1]] !== '') {
        return this.celdas[a[0]][a[1]]; 
      }
    }
  
   
    return null;
  }
  
  
  function jugarTresEnRaya() {
    const jugador1 = new Jugador('Jugador 1', 'X');
    const jugador2 = new Jugador('Jugador 2', 'O');
    const tablero = new Tablero();
    let jugadorActual = jugador1;
  
    while (true) {
      console.log(`${jugadorActual.nombre} (${jugadorActual.marca}), es tu turno.`);
      tablero.dibujarTablero();
  
      const fila = parseInt(prompt('Selecciona la fila (0, 1, 2):'));
      const columna = parseInt(prompt('Selecciona la columna (0, 1, 2):'));
  
      if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3) {
        if (tablero.hacerMovimiento(fila, columna, jugadorActual.marca)) {
          const ganador = tablero.verificarGanador();
          if (ganador) {
            tablero.dibujarTablero();
            console.log(`¡${jugadorActual.nombre} (${jugadorActual.marca}) es el ganador!`);
            break;
          } else if (!tablero.celdas.flat().includes('')) {
            tablero.dibujarTablero();
            console.log('Es empate');
            break;
          } else {
            jugadorActual = jugadorActual === jugador1 ? jugador2 : jugador1;
          }
        } else {
          console.log('Esa casilla ya está ocupada, intenta de nuevo.');
        }
      } else {
        console.log('Selección no válida, intenta de nuevo.');
      }
    }
  }
  
  
  jugarTresEnRaya();
