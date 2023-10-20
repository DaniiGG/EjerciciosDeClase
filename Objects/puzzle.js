class Puzzle {
  constructor(dimension) {
    this.dimension = dimension;
    this.tablero = this.generarTableroAleatorio(dimension);
    this.celdaVacia = { x: dimension - 1, y: dimension - 1 };
    this.movimientos = 0;
    this.tiempoInicio = null;
  }

  generarTableroAleatorio(dimension) {
    // Crear un tablero ordenado
    const tablero = [];
    for (let i = 0; i < dimension; i++) {
      tablero[i] = [];
      for (let j = 0; j < dimension; j++) {
        tablero[i][j] = i * dimension + j + 1;
      }
    }
    tablero[dimension - 1][dimension - 1] = 0; // El espacio vacío se representa con 0

    // Mezclar el tablero aleatoriamente
    this.mezclarTablero(tablero);
    return tablero;
  }

  mezclarTablero(tablero) {
    const dimension = tablero.length;
    const maxMovimientos = dimension * dimension * dimension * dimension; // Un número suficiente de mezclas
    let x = dimension - 1;
    let y = dimension - 1;

    for (let i = 0; i < maxMovimientos; i++) {
      const movimientosValidos = this.obtenerMovimientosValidos(x, y, dimension);
      const movimientoAleatorio = movimientosValidos[Math.floor(Math.random() * movimientosValidos.length)];
      const [nuevaX, nuevaY] = this.obtenerNuevaPosicion(x, y, movimientoAleatorio);
      [tablero[x][y], tablero[nuevaX][nuevaY]] = [tablero[nuevaX][nuevaY], tablero[x][y]];
      x = nuevaX;
      y = nuevaY;
    }
  }

  obtenerMovimientosValidos(x, y, dimension) {
    const movimientos = [];
    if (x > 0) movimientos.push('arriba');
    if (x < dimension - 1) movimientos.push('abajo');
    if (y > 0) movimientos.push('izquierda');
    if (y < dimension - 1) movimientos.push('derecha');
    return movimientos;
  }

  obtenerNuevaPosicion(x, y, movimiento) {
    switch (movimiento) {
      case 'arriba':
        return [x - 1, y];
      case 'abajo':
        return [x + 1, y];
      case 'izquierda':
        return [x, y - 1];
      case 'derecha':
        return [x, y + 1];
      default:
        return [x, y];
    }
  }

  moverCeldaVacia(movimiento) {
    const { x, y } = this.celdaVacia;
    const dimension = this.dimension;
    if (this.esMovimientoValido(x, y, movimiento, dimension)) {
      const [nuevaX, nuevaY] = this.obtenerNuevaPosicion(x, y, movimiento);
      [this.tablero[x][y], this.tablero[nuevaX][nuevaY]] = [this.tablero[nuevaX][nuevaY], this.tablero[x][y]];
      this.celdaVacia = { x: nuevaX, y: nuevaY };
      this.movimientos++;
      if (this.tiempoInicio === null) {
        this.tiempoInicio = new Date();
      }
    }
  }

  esMovimientoValido(x, y, movimiento, dimension) {
    const [nuevaX, nuevaY] = this.obtenerNuevaPosicion(x, y, movimiento);
    return nuevaX >= 0 && nuevaX < dimension && nuevaY >= 0 && nuevaY < dimension;
  }

  estaResuelto() {
    const dimension = this.dimension;
    for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
        const valorEsperado = i * dimension + j + 1;
        if (i === dimension - 1 && j === dimension - 1) {
          if (this.tablero[i][j] !== 0) return false;
        } else {
          if (this.tablero[i][j] !== valorEsperado) return false;
        }
      }
    }
    return true;
  }

  dibujarTablero() {
    for (let i = 0; i < this.dimension; i++) {
      let fila = '';
      for (let j = 0; j < this.dimension; j++) {
        const celda = this.tablero[i][j];
        fila += celda === 0 ? '   ' : celda.toString().padStart(3);
        fila += ' | ';
      }
      console.log(fila);
      
    }
  }

  obtenerTiempoTranscurrido() {
    if (this.tiempoInicio === null) return '0 segundos';
    const tiempoActual = new Date();
    const tiempoTranscurrido = Math.floor((tiempoActual - this.tiempoInicio) / 1000);
    return `${tiempoTranscurrido} segundos`;
  }
}

// Ejemplo de uso
const dimension = 3; // Define la dimensión del tablero
const rompecabezas = new Puzzle(dimension);


rompecabezas.dibujarTablero();
console.log(`Número de movimientos realizados: ${rompecabezas.movimientos}`);
console.log(`Tiempo transcurrido: ${rompecabezas.obtenerTiempoTranscurrido()}`);