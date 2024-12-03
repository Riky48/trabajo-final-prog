"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Usuario_1 = require("./Usuario");
var Ruleta_1 = require("./Ruleta");
var Jackpot777_1 = require("./Jackpot777");
var Bananas_1 = require("./Bananas");
var Bingo_1 = require("./Bingo");
// Registro de usuario
function registrarUsuario() {
    console.log("¡Bienvenido al Casino Las Vegas!");
    var nombre = readlineSync.question("Ingrese su nombre: ");
    var apellido = readlineSync.question("Ingrese su apellido: ");
    var documento = readlineSync.questionInt("Ingrese su documento: ");
    var saldo = readlineSync.questionFloat("Ingrese su saldo inicial: ");
    return new Usuario_1.Usuario(nombre, apellido, documento, saldo);
}
// Juegos disponibles
var juegos = {
    "1": new Ruleta_1.Ruleta(),
    "2": new Jackpot777_1.Jackpot777(),
    "3": new Bananas_1.Bananas(),
    "4": new Bingo_1.Bingo(),
};
// Mostrar menu de juegos
function mostrarMenu() {
    console.log("\nSelecciona un juego:");
    console.log("1. Ruleta");
    console.log("2. Jackpot 777");
    console.log("3. BananasJackpot");
    console.log("4. Bingo");
    console.log("5. Salir");
    return readlineSync.question("Ingresa el número del juego: ");
}
// Jugar a un juego seleccionado
function jugarJuego(usuario, juego) {
    var saldoIni = usuario.getSaldo();
    while (true) {
        var apuesta = readlineSync.questionFloat("¿Cuánto deseas apostar?: ");
        if (!usuario.tieneSaldo(apuesta)) {
            console.log("No tienes saldo suficiente para esta apuesta.");
            break; // Salir si no hay suficiente saldo
        }
        var resultado = juego.jugar(apuesta);
        console.log(resultado.mensaje);
        usuario.actualizarSaldo(resultado.ganancia);
        console.log("Tu saldo actual es: ".concat(usuario.getSaldo()));
        if (usuario.getSaldo() <= 0) {
            var totalPerdido = saldoIni - usuario.getSaldo();
            console.log("Te has quedado sin saldo. Volviendo al menu principal.");
            break;
        }
        var seguir = readlineSync
            .question("¿Quieres seguir jugando? (s/n): ")
            .toLowerCase();
        if (seguir !== "s") {
            console.log("Volviendo al menú principal...");
            break;
        }
    }
}
// Flujo principal
function main() {
    var usuario = registrarUsuario();
    while (true) {
        var eleccion = mostrarMenu();
        if (eleccion === "5") {
            console.log("Gracias por jugar. ¡Hasta la próxima!");
            break;
        }
        // Guardamos en juegoSeleccionado lo que la persona elegio en la eleccion
        var juegoSeleccionado = juegos[eleccion];
        if (juegoSeleccionado) {
            jugarJuego(usuario, juegoSeleccionado);
        }
        else {
            console.log("Opción inválida. Intenta nuevamente.");
        }
    }
}
main();
