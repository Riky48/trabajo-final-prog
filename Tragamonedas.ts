import { Juego } from "./Juego";

export abstract class Tragamonedas implements Juego {
  protected tema: string;
  protected apuestaMinima: number;

  constructor(tema: string, apuestaMinima: number) {
    this.tema = tema;
    this.apuestaMinima = apuestaMinima;
  }

  abstract jugar(apuesta: number): { mensaje: string; ganancia: number };

  resultado(): string {
    return `Resultados del juego${this.tema}`;
  }

  //Valida que la apuesta por el usuario sea mayor o igual a la apuesta minima
  protected validarApuesta(apuesta: number): boolean {
    return apuesta >= this.apuestaMinima;
  }
}
