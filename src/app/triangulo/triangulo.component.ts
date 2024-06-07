import { Component, OnInit } from '@angular/core';
import { TrianguloEquilatero, TrianguloEscaleno } from '../modelo/FigurasGeometricas';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonInput, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader]
})
export class TrianguloComponent  implements OnInit {
  trianguloEquilatero: TrianguloEquilatero;
  trianguloEscaleno: TrianguloEscaleno;

  constructor() {
    this.trianguloEquilatero = new TrianguloEquilatero("trianguloEquilatero", 5);
    this.trianguloEscaleno = new TrianguloEscaleno("trianguloEscaleno", 7, 8, 9);
  }

  ngOnInit() {}

}
