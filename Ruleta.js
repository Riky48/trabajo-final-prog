"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
var Ruleta = /** @class */ (function () {
    function Ruleta(numeros, colores) {
        this.numeros = [];
        this.colores = ["negro", "rojo"];
        for (var i = 1; i <= 36; i++) {
            this.numeros.push(i);
        }
    }
    Ruleta.prototype.getNumero = function () {
        return this.numeros;
    };
    Ruleta.prototype.getColor = function () {
        return this.colores;
    };
    Ruleta.prototype.girarRuleta = function () {
        var numeroAleatorio = this.numeros[Math.floor(Math.random() * this.numeros.length)];
        var colorAleatorio = this.colores[Math.floor(Math.random() * this.colores.length)];
        return { numero: numeroAleatorio, color: colorAleatorio };
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
var ruleta = new Ruleta();
var resultado = ruleta.girarRuleta();
console.log("la ruleta cayo en el numero ".concat(resultado.numero, " y color ").concat(resultado.color));
