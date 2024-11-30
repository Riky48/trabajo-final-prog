import * as readlineSync from "readline-sync";
import { Usuario } from "./Usuario";
import { Ruleta } from "./Ruleta";
import { Jackpot777 } from "./Jackpot777";
import { Juego } from "./Juego";
import { Bananas } from "./Bananas";

// Registro de usuario
function registrarUsuario(): Usuario {
  console.log("¡Bienvenido al Casino Las Vegas!");
  const nombre = readlineSync.question("Ingrese su nombre: ");
  const apellido = readlineSync.question("Ingrese su apellido: ");
  const documento = readlineSync.questionInt("Ingrese su documento: ");
  const saldo = readlineSync.questionFloat("Ingrese su saldo inicial: ");
  return new Usuario(nombre, apellido, documento, saldo);
}

// Juegos disponibles
const juegos: { [key: string]: Juego } = {
  "1": new Ruleta(),
  "2": new Jackpot777(),
  "3": new Bananas(),
};

// Mostrar menu de juegos
function mostrarMenu(): string {
  console.log("\nSelecciona un juego:");
  console.log("1. Ruleta");
  console.log("2. Jackpot 777");
  console.log("3. BananasJackpot");
  console.log("4. Salir");
  return readlineSync.question("Ingresa el número del juego: ");
}

// Jugar a un juego seleccionado
function jugarJuego(usuario: Usuario, juego: Juego): void {
  while (true) {
    const apuesta = readlineSync.questionFloat("¿Cuánto deseas apostar?: ");

    if (!usuario.tieneSaldo(apuesta)) {
      console.log("No tienes saldo suficiente para esta apuesta.");
      break; // Salir si no hay suficiente saldo
    }

    const resultado = juego.jugar(apuesta);
    console.log(resultado.mensaje);

    usuario.actualizarSaldo(resultado.ganancia);
    console.log(`Tu saldo actual es: ${usuario.getSaldo()}`);

    if (usuario.getSaldo() <= 0) {
      console.log("Te has quedado sin saldo. Volviendo al menu principal.");
      break;
    }

    const seguir = readlineSync
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
  const usuario = registrarUsuario();

  while (true) {
    const eleccion = mostrarMenu();
    if (eleccion === "4") {
      console.log("Gracias por jugar. ¡Hasta la próxima!");
      break;
    }

    // Guardamos en juegoSeleccionado lo que la persona elegio en la eleccion
    const juegoSeleccionado = juegos[eleccion];
    if (juegoSeleccionado) {
      jugarJuego(usuario, juegoSeleccionado);
    } else {
      console.log("Opción inválida. Intenta nuevamente.");
    }
  }
}

main();