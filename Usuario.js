"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, documento, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.saldo = saldo;
    }
    Usuario.prototype.getNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    Usuario.prototype.getSaldo = function () {
        return this.saldo;
    };
    Usuario.prototype.actualizarSaldo = function (monto) {
        this.saldo += monto; // Puede ser positivo o negativo
    };
    // Validamos que al apostar el usuario tenga el saldo para la apuesta que desea realizar
    Usuario.prototype.tieneSaldo = function (apuesta) {
        return this.saldo >= apuesta;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
