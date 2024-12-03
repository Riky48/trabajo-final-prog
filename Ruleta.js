"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
var readlineSync = require("readline-sync");
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        var _this = this;
        this.numeros = [];
        // Crear los numeros y asignar colores
        for (var i = 0; i <= 36; i++) {
            this.numeros.push(i);
        }
        // Colores: rojo, negro y 0 como verde
        this.colores = new Map();
        this.numeros.forEach(function (numero) {
            _this.colores.set(numero, numero === 0 ? "verde" : numero % 2 === 0 ? "negro" : "rojo");
        });
    }
    Ruleta.prototype.jugar = function (apuesta) {
        // Pedir al usuario un numero para apostar
        var numeroElegido = readlineSync.questionInt("Elige un número entre 0 y 36: ");
        if (numeroElegido < 0 || numeroElegido > 36) {
            return {
                mensaje: "Número inválido. Inténtalo de nuevo.",
                ganancia: -apuesta,
            };
        }
        console.log("La bola está girando...");
        var start = Date.now();
        while (Date.now() - start < 5000) {
            // Simula la espera de 5 segundos
        }
        // Calcular numero y color ganadores
        var numeroGanador = Math.floor(Math.random() * 37); // 0-36
        var colorGanador = this.colores.get(numeroGanador) || "verde";
        // Determinar si gano o perdio
        var ganancia = -apuesta;
        var mensajeResultado = "";
        if (numeroElegido === numeroGanador) {
            ganancia = apuesta * 35; // Pago estandar
            mensajeResultado = "\u00A1Felicidades! El n\u00FAmero ganador fue ".concat(numeroGanador, " (").concat(colorGanador, "). Ganaste ").concat(ganancia.toFixed(2), ".");
        }
        else {
            mensajeResultado = "Perdiste. El n\u00FAmero ganador fue ".concat(numeroGanador, " (").concat(colorGanador, ").");
        }
        return { mensaje: mensajeResultado, ganancia: ganancia };
    };
    Ruleta.prototype.resultado = function () {
        return "Ruleta finalizada";
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
