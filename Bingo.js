"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bingo = void 0;
var Bingo = /** @class */ (function () {
    function Bingo() {
        this.numerosJugador = [];
        this.numerosSorteados = [];
        this.ronda = 0;
        this.premio = 0;
    }
    // Método jugar: asigna números aleatorios y sorteos
    Bingo.prototype.jugar = function (apuesta) {
        var _this = this;
        if (this.numerosJugador.length === 0) {
            // Asignar 5 números aleatorios únicos entre 1 y 75 para el jugador
            while (this.numerosJugador.length < 5) {
                var numero = Math.floor(Math.random() * 75) + 1; // Generar un número aleatorio entre 1 y 75, el +1 es para incluir 75 y
                //que no salga el 0(num no valido en el bingo)
                if (!this.numerosJugador.includes(numero)) {
                    // Si el número no está en la lista, agregarlo
                    this.numerosJugador.push(numero); // Agregar el número a la lista
                }
            }
            console.log("Tu cartilla de bingo es: ".concat(this.numerosJugador.join(", "))); // Imprimir la cartilla de bingo del jugador
            this.premio = apuesta * 2; // Premio basado en la apuesta
        }
        // Sorteo de un número
        var numeroSorteado = Math.floor(Math.random() * 75) + 1;
        this.numerosSorteados.push(numeroSorteado);
        this.ronda++;
        // Verificamos si el jugador ha ganado (si todos los números están sorteados)
        var haGanado = this.numerosJugador.every(function (num) {
            return _this.numerosSorteados.includes(num);
        }); // every () devuelve true si todos los elementos de la lista son verdaderos
        if (haGanado) {
            return {
                mensaje: "\u00A1El jugador ha ganado! Se sorte\u00F3 todos sus n\u00FAmeros en ".concat(this.ronda, " rondas. Premio: ").concat(this.premio),
                ganancia: this.premio,
            };
        }
        else {
            return {
                mensaje: "Ronda ".concat(this.ronda, ": El n\u00FAmero sorteado fue ").concat(numeroSorteado, ". \u00A1Sigue jugando!"),
                ganancia: -apuesta,
            };
        }
    };
    // Método resultado: muestra si el jugador ha ganado
    Bingo.prototype.resultado = function () {
        var _this = this;
        var haGanado = this.numerosJugador.every(function (num) {
            return _this.numerosSorteados.includes(num);
        });
        if (haGanado) {
            return "\u00A1Has ganado! Premio: ".concat(this.premio, " monedas. Te tom\u00F3 ").concat(this.ronda, " rondas.");
        }
        else {
            return "A\u00FAn no has ganado. Sigue esperando que se sorteen tus n\u00FAmeros.";
        }
    };
    return Bingo;
}());
exports.Bingo = Bingo;
