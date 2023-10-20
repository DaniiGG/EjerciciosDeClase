class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.eleccion = null;
    }

    Elegir(eleccion) {
        this.eleccion = eleccion;
    }
}

class Game {
    constructor(player1, maquina) {
        this.players = [player1, maquina];
        this.posibleselecciones = ['piedra', 'papel', 'tijera'];
    }


    


    Jugar() {
        const [player1, maquina] = this.players;

        const random = Math.floor(Math.random() * this.posibleselecciones.length);
        const eleccionmaquina = this.posibleselecciones[random];
        maquina.Elegir(eleccionmaquina);

        const primeraeleccion = player1.eleccion;
        const segundaeleccion = maquina.eleccion;
        




        document.write(`${player1.name} ha elegido: ${primeraeleccion}<br>`);
        document.write(`La máquina elige: ${segundaeleccion}<br>`);

        if (primeraeleccion === segundaeleccion) {
            document.write("Es empate!<br>");
        } else if (
            (primeraeleccion == 'piedra' && segundaeleccion == 'tijera') ||
            (primeraeleccion == 'papel' && segundaeleccion == 'piedra') ||
            (primeraeleccion == 'tijera' && segundaeleccion == 'papel')
        ) {
            player1.wins++;
            maquina.losses++;
            document.write(`${player1.name} gana! `+"<br>");
        } else {
            maquina.wins++;
            player1.losses++;
            document.write(" La máquina gana! <br>");
        }
    }

    displayResults() {
        this.players.forEach((player) => {
            document.write(`${player.name} tiene ${player.wins} victorias y ${player.losses} derrotas`+"<br>");
        });
    }
}

const Nombre = prompt("Escribe tu nombre:");
const player1 = new Player(Nombre);
const player2 = new Player('Máquina');
const partida = new Game(player1, player2);

do {
    var eleccionusuario = prompt("Elige: piedra, papel o tijera (para terminar el juego escribe (s)):").toLowerCase();

if(eleccionusuario!="s"){
    player1.Elegir(eleccionusuario);
    game.displayResults();
    game.Jugar();
}
} while (eleccionusuario!="s");