export class Usuario {
  private nombre: string;
  private apellido: string;
  private documento: string;
  private saldo: number;

  constructor(
    nombre: string,
    apellido: string,
    documento: string,
    saldo: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
    this.saldo = saldo;
  }

  public getNombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public actualizarSaldo(monto: number): void {
    this.saldo += monto; // Puede ser positivo o negativo
  }

  // Validamos que al apostar el usuario tenga el saldo para la apuesta que desea realizar
  public tieneSaldo(apuesta: number): boolean {
    return this.saldo >= apuesta;
  }
}
