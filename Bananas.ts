import { Tragamonedas } from "./Tragamonedas";
import { Juego } from "./Juego";

export class Bananas extends Tragamonedas implements Juego {
  constructor() {
    super("BananasJackpot", 30); // Tema: BananasJackpot, apuesta minima: 30
  }

  jugar(apuesta: number): { mensaje: string; ganancia: number } {
    if (!this.validarApuesta(apuesta)) {
      // Validamos que lo que apuesta es mas q la apuesta minima
      return {
        mensaje: `La apuesta mínima es ${this.apuestaMinima}`,
        ganancia: 0,
      };
    }

    // Generamos los 3 simbolos para jugar
    const resultados = [
      this.generarSimbolo(),
      this.generarSimbolo(),
      this.generarSimbolo(),
    ];

    console.log(`Resultado: ${resultados.join(" | ")}`);

    // Con every validamos si salen 3 "🍌"
    if (resultados.every((s) => s === "🍌")) {
      const ganancia = apuesta * 100; // Jackpot multiplicador
      return { mensaje: "¡Jackpot! Ganaste con 🍌🍌🍌!", ganancia };
    } else if (
      // Validamos que salga 3 veces otro cualquier simbolo
      resultados[0] === resultados[1] &&
      resultados[1] === resultados[2]
    ) {
      const ganancia = apuesta * 10;
      return {
        mensaje: `¡Ganaste con tres símbolos iguales (${resultados[0]})!`,
        ganancia,
      };
    } else {
      return { mensaje: "Lo siento, no ganaste esta vez.", ganancia: -apuesta };
    }
  }

  resultado(): string {
    return "Resultados de la última tirada de BananasJackpot.";
  }

  // Declaramos los "Simbolos" y con math.random hacemos q elija al azar
  private generarSimbolo(): string {
    const simbolos = ["🍌", "🐵", "🍐", "🍇"];
    return simbolos[Math.floor(Math.random() * simbolos.length)];
  }
}
