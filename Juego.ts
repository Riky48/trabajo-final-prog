export interface Juego {
  jugar(apuesta: number): { mensaje: string; ganancia: number };
  resultado(): string;
}
