import { Juego } from "./Juego";
import * as readlineSync from "readline-sync";

export class Ruleta implements Juego {
  private numeros: number[] = [];
  private colores: Map<number, string>;

  constructor() {
    // Crear los numeros y asignar colores
    for (let i = 0; i <= 36; i++) {
      this.numeros.push(i);
    }

    // Colores: rojo, negro y 0 como verde
    this.colores = new Map();
    this.numeros.forEach((numero) => {
      this.colores.set(
        numero,
        numero === 0 ? "verde" : numero % 2 === 0 ? "negro" : "rojo"
      );
    });
  }

  jugar(apuesta: number): { mensaje: string; ganancia: number } {
    // Pedir al usuario un numero para apostar
    const numeroElegido = readlineSync.questionInt(
      "Elige un número entre 0 y 36: "
    );
    if (numeroElegido < 0 || numeroElegido > 36) {
      return {
        mensaje: "Número inválido. Inténtalo de nuevo.",
        ganancia: -apuesta,
      };
    }

    console.log("La bola está girando...");
    const start = Date.now();
    while (Date.now() - start < 5000) {
      // Simula la espera de 5 segundos
    }

    // Calcular numero y color ganadores
    const numeroGanador = Math.floor(Math.random() * 37); // 0-36
    const colorGanador = this.colores.get(numeroGanador) || "verde";

    // Determinar si gano o perdio
    let ganancia = -apuesta;
    let mensajeResultado = "";

    if (numeroElegido === numeroGanador) {
      ganancia = apuesta * 35; // Pago estandar
      mensajeResultado = `¡Felicidades! El número ganador fue ${numeroGanador} (${colorGanador}). Ganaste ${ganancia.toFixed(
        2
      )}.`;
    } else {
      mensajeResultado = `Perdiste. El número ganador fue ${numeroGanador} (${colorGanador}).`;
    }

    return { mensaje: mensajeResultado, ganancia };
  }

  resultado(): string {
    return "Ruleta finalizada";
  }
}
