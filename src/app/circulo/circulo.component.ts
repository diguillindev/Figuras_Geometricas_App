import { Component, OnInit } from '@angular/core';
import { Circulo } from '../modelo/FigurasGeometricas';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, IonLabel, IonItem } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonLabel, IonInput, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButton, FormsModule, IonItem]
})
export class CirculoComponent  implements OnInit {
  
  perimetro:number= 0
  circulo: Circulo;

  constructor() {
    this.circulo = new Circulo("El perimetro es", 0);
  }

  ngOnInit() {}

  calcularPerimetro(): void {
    this.perimetro = this.circulo.calcularPerimetro();
  }
}
