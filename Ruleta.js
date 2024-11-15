"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
var readlineSync = require("readline-sync");
var Ruleta = /** @class */ (function () {
    function Ruleta(numeros, colores) {
        this.numeros = [];
        this.colores = ["rojo", "negro"];
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
    //METODO PARA GIRAR LA RULETA Y QUE ELIJA UN NUMERO Y COLOR ALETARIO 
    Ruleta.prototype.girarRuleta = function () {
        var numeroAleatorio = this.numeros[Math.floor(Math.random() * this.numeros.length)];
        var colorAleatorio = this.colores[Math.floor(Math.random() * this.colores.length)];
        return { numero: numeroAleatorio, color: colorAleatorio };
    };
    //METODO PARA VERIFICAR SI LO QUE ELIJIO EL USUARIO CONISIDE CON EL RESULTADO
    Ruleta.prototype.verificarApuesta = function (eleccion) {
        var resultado = this.girarRuleta();
        console.log("la ruleta cayo en el numero ".concat(resultado.numero, " y color ").concat(resultado.color, "."));
        return eleccion.numero === resultado.numero && eleccion.color === resultado.color;
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
var ruleta = new Ruleta();
//FUNCION PARA INICIAR LA APUESTA
function iniciarApuesta() {
    //preguntar al usuario que elija un numero
    var numeroElegido = readlineSync.questionInt("Elige un numero entre 1 y 36: ");
    //VALIDAR QUE EL NUMERO SE ENCUENTRA ENTRE 1 Y 36
    if (numeroElegido < 1 || numeroElegido > 36) {
        console.log("por favor elegir un numero entre 1 y 36");
        return iniciarApuesta(); //vuelve a preguntar si no es valido
    }
    //PREGUNTAR AL USUARIO QUE ELIJA UN COLOR "negro" "rojo"
    var elegirColor = readlineSync.question("Elegir color (negro, rojo): ").toLowerCase();
    //VALIDAR COLOR ELEGIDO
    if (elegirColor !== "negro" && elegirColor !== "rojo") {
        console.log("por favor elige un color correcto: negro o rojo");
        return; //vuelve a preguntar
    }
    //VERIFICAR APUESTA 
    var eleccionUsuario = { numero: numeroElegido, color: elegirColor };
    if (ruleta.verificarApuesta(eleccionUsuario)) {
        console.log("Felicidades ganaste");
    }
    else {
        console.log("lo siento sera la proxima");
    }
}
//INICIAR APUESTA
iniciarApuesta();
