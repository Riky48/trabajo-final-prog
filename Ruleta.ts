export class Ruleta {
    private numeros: number[];
    private colores: string[];

    constructor(numeros?:string[], colores?:string[]) {
        this.numeros = [];
        this.colores = ["negro", "rojo"];

        for(let i = 1; i <= 36; i++) {
            this.numeros.push(i);
        }
    }

    getNumero() {
        return this.numeros;
    }

    getColor() {
        return this.colores;
    }

    girarRuleta() {
        const numeroAleatorio = this.numeros[Math.floor(Math.random() * this.numeros.length)];
        const colorAleatorio = this.colores[Math.floor(Math.random() * this.colores.length)];
        return { numero:numeroAleatorio, color:colorAleatorio};
    }
}

const ruleta = new Ruleta();

const resultado = ruleta.girarRuleta();
console.log(`la ruleta cayo en el numero ${resultado.numero} y color ${resultado.color}`);
