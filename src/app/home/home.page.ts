import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonItem, IonList, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent, IonSelect, IonSelectOption, CommonModule]
})
//aqui para manejar la seleccion y mostrar componentes 
export class HomePage {
  
  selectedFigure: string = ""

  constructor() { }

  onFigureChange(event: any) {
    this.selectedFigure = event.detail.value;
  }
}
