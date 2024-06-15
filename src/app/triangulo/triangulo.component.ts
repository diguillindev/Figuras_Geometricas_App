import { Component, OnInit } from '@angular/core';
import { TrianguloEquilatero, TrianguloEscaleno } from '../modelo/FigurasGeometricas';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonInput, IonButton, IonLabel, IonItem } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonLabel, IonItem, FormsModule]
})
export class TrianguloComponent implements OnInit {
  trianguloEquilatero: TrianguloEquilatero;
  trianguloEscaleno: TrianguloEscaleno;
  ladoA: number = 0;
  perimetroEquilatero: number = 0;
  perimetroEscaleno: number = 0;

  constructor() {
    this.trianguloEquilatero = new TrianguloEquilatero("Triángulo Equilátero", 0);
    this.trianguloEscaleno = new TrianguloEscaleno("Triángulo Escaleno", 0, 0, 0);
  }

  ngOnInit() {
    this.perimetroEquilatero = this.trianguloEquilatero.calcularPerimetro();
    this.perimetroEscaleno = this.trianguloEscaleno.calcularPerimetro();
  }

  calcularPerimetros(): void {
    this.trianguloEquilatero.ladoA = this.ladoA;
    this.trianguloEscaleno.ladoA = this.ladoA;
    this.perimetroEquilatero = this.trianguloEquilatero.calcularPerimetro();
    this.perimetroEscaleno = this.trianguloEscaleno.calcularPerimetro();
  }
}
