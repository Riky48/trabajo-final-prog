import { Juego } from "./Juego";


class Bingo implements Juego {
    private numerosJugador: number[];
    private numerosSorteados: number[];
    private ronda: number;
    private premio: number;
  
    constructor() {
      this.numerosJugador = [];
      this.numerosSorteados = [];
      this.ronda = 0;
      this.premio = 0;
    }
  
    // Método jugar: asigna números aleatorios y sorteos
    jugar(apuesta: number): string {
      if (this.numerosJugador.length === 0) {
        // Asignar 5 números aleatorios únicos entre 1 y 75 para el jugador
        while (this.numerosJugador.length < 5) {
          const numero = Math.floor(Math.random() * 75) + 1; // Generar un número aleatorio entre 1 y 75, el +1 es para incluir 75 y 
                                                           //que no salga el 0(num no valido en el bingo)
          if (!this.numerosJugador.includes(numero)) { // Si el número no está en la lista, agregarlo
            this.numerosJugador.push(numero); // Agregar el número a la lista
          }
        }
        console.log(`Tu cartilla de bingo es: ${this.numerosJugador.join(", ")}`); // Imprimir la cartilla de bingo del jugador
        this.premio = apuesta * 2; // Premio basado en la apuesta
      }
  
      // Sorteo de un número
      const numeroSorteado = Math.floor(Math.random() * 75) + 1;
      this.numerosSorteados.push(numeroSorteado);
      this.ronda++;
  
      // Verificamos si el jugador ha ganado (si todos los números están sorteados)
      const haGanado = this.numerosJugador.every(num => this.numerosSorteados.includes(num)); // every () devuelve true si todos los elementos de la lista son verdaderos
  
      if (haGanado) {
        return `¡El jugador ha ganado! Se sorteó todos sus números en ${this.ronda} rondas.`;
      } else {
        return `Ronda ${this.ronda}: El número sorteado fue ${numeroSorteado}. ¡Sigue jugando!`;
      }
    }
  
    // Método resultado: muestra si el jugador ha ganado
    resultado(): string {
      const haGanado = this.numerosJugador.every(num => this.numerosSorteados.includes(num));
      if (haGanado) {
        return `¡Has ganado! Premio: ${this.premio} monedas. Te tomó ${this.ronda} rondas.`;
      } else {
        return `Aún no has ganado. Sigue esperando que se sorteen tus números.`;
      }
    }
  }
  
  