import * as readlineSync from "readline-sync";

export class Ruleta {
    private numeros: number[];
    private colores: string[];

    constructor(numeros?:string[], colores?:string[]) {
        this.numeros = [];
        this.colores = ["rojo","negro"];

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


    //METODO PARA GIRAR LA RULETA Y QUE ELIJA UN NUMERO Y COLOR ALETARIO 
    girarRuleta(): {numero:Number; color:String} {
        const numeroAleatorio = this.numeros[Math.floor(Math.random() * this.numeros.length)];
        const colorAleatorio = this.colores[Math.floor(Math.random() * this.colores.length)];
        return { numero:numeroAleatorio, color:colorAleatorio};
    }


    //METODO PARA VERIFICAR SI LO QUE ELIJIO EL USUARIO CONISIDE CON EL RESULTADO
    verificarApuesta(eleccion: {numero:number; color:string}):boolean {
        const resultado = this.girarRuleta();
        console.log(`la ruleta cayo en el numero ${resultado.numero} y color ${resultado.color}.`);
        return eleccion.numero === resultado.numero && eleccion.color === resultado.color;
        
    }

}

const ruleta = new Ruleta();

//FUNCION PARA INICIAR LA APUESTA
function iniciarApuesta() {
    //preguntar al usuario que elija un numero
    const numeroElegido = readlineSync.questionInt("Elige un numero entre 1 y 36: ");

    //VALIDAR QUE EL NUMERO SE ENCUENTRA ENTRE 1 Y 36
    if(numeroElegido < 1 || numeroElegido > 36) {
        console.log("por favor elegir un numero entre 1 y 36" );
        return iniciarApuesta();//vuelve a preguntar si no es valido
    }

    //PREGUNTAR AL USUARIO QUE ELIJA UN COLOR "negro" "rojo"
    const elegirColor : string = readlineSync.question("Elegir color (negro, rojo): ").toLowerCase();

    //VALIDAR COLOR ELEGIDO
    if(elegirColor !== "negro" && elegirColor !== "rojo") {
        console.log("por favor elige un color correcto: negro o rojo");
        return; //vuelve a preguntar
    }

    //VERIFICAR APUESTA 
    const eleccionUsuario = {numero:numeroElegido, color:elegirColor};
    
    if(ruleta.verificarApuesta(eleccionUsuario)) {
        console.log("Felicidades ganaste");
    }else {
        console.log("lo siento sera la proxima");
    }
}


//INICIAR APUESTA
iniciarApuesta();

