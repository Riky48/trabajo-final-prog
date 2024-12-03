"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bananas = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var Bananas = /** @class */ (function (_super) {
    __extends(Bananas, _super);
    function Bananas() {
        return _super.call(this, "BananasJackpot", 30) || this; // Tema: BananasJackpot, apuesta minima: 30
    }
    Bananas.prototype.jugar = function (apuesta) {
        if (!this.validarApuesta(apuesta)) {
            // Validamos que lo que apuesta es mas q la apuesta minima
            return {
                mensaje: "La apuesta m\u00EDnima es ".concat(this.apuestaMinima),
                ganancia: 0,
            };
        }
        // Generamos los 3 simbolos para jugar
        var resultados = [
            this.generarSimbolo(),
            this.generarSimbolo(),
            this.generarSimbolo(),
        ];
        console.log("Resultado: ".concat(resultados.join(" | ")));
        // Con every validamos si salen 3 "🍌"
        if (resultados.every(function (s) { return s === "🍌"; })) {
            var ganancia = apuesta * 100; // Jackpot multiplicador
            return { mensaje: "¡Jackpot! Ganaste con 🍌🍌🍌!", ganancia: ganancia };
        }
        else if (
        // Validamos que salga 3 veces otro cualquier simbolo
        resultados[0] === resultados[1] &&
            resultados[1] === resultados[2]) {
            var ganancia = apuesta * 10;
            return {
                mensaje: "\u00A1Ganaste con tres s\u00EDmbolos iguales (".concat(resultados[0], ")!"),
                ganancia: ganancia,
            };
        }
        else {
            return { mensaje: "Lo siento, no ganaste esta vez.", ganancia: -apuesta };
        }
    };
    Bananas.prototype.resultado = function () {
        return "Resultados de la última tirada de BananasJackpot.";
    };
    // Declaramos los "Simbolos" y con math.random hacemos q elija al azar
    Bananas.prototype.generarSimbolo = function () {
        var simbolos = ["🍌", "🐵", "🍐", "🍇"];
        return simbolos[Math.floor(Math.random() * simbolos.length)];
    };
    return Bananas;
}(Tragamonedas_1.Tragamonedas));
exports.Bananas = Bananas;
