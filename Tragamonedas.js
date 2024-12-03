"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas(tema, apuestaMinima) {
        this.tema = tema;
        this.apuestaMinima = apuestaMinima;
    }
    Tragamonedas.prototype.resultado = function () {
        return "Resultados del juego".concat(this.tema);
    };
    //Valida que la apuesta por el usuario sea mayor o igual a la apuesta minima
    Tragamonedas.prototype.validarApuesta = function (apuesta) {
        return apuesta >= this.apuestaMinima;
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
