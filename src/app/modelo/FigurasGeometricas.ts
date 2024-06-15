export abstract class FiguraGeometrica {
    constructor(public nombre: string) {}

    abstract calcularPerimetro(): number;
} 

export class Circulo extends FiguraGeometrica {
    constructor(nombre: string, public radio: number) {
        super(nombre);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

export class TrianguloEquilatero extends FiguraGeometrica {
    constructor(nombre: string, public ladoA: number) {
        super(nombre);
    }

    calcularPerimetro(): number {
        return 3 * this.ladoA;
    }
}

export class TrianguloEscaleno extends FiguraGeometrica {
    constructor(nombre: string, public ladoA: number, public ladoB: number, public ladoC: number) {
        super(nombre);
    }

    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}

