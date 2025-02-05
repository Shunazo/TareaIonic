import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.page.html',
  styleUrls: ['./suma.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, IonCard, IonButton, IonInput]
})
export class SumaPage {

  num1?: number;
  num2?: number;
  resultado?: number;

  sumar(num1: any, num2: any): number {
    this.resultado = Number(num1) + Number(num2);
    return this.resultado;
  }

}
