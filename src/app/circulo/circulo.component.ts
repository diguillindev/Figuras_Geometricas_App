import { Component, OnInit } from '@angular/core';
import { Circulo } from '../modelo/FigurasGeometricas';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonInput, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButton]
})
export class CirculoComponent  implements OnInit {
  
  circulo: Circulo;

  constructor() {
    this.circulo = new Circulo("El perimetro es", 15);
  }

  ngOnInit() {}

  

}
