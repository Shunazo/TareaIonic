import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule , IonicModule, IonCard, IonButton, IonInput]
})
export class TraductorPage {
  numero: string = "";
  resultado: string = "";

  traduccion(number: number): string {
    const ones = ["", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez", "Once", "Doce", "Trece", "Catorce", "Quince", "Dieciséis", "Diecisiete", "Dieciocho", "Diecinueve"];
    const tens = ["", "", "Veinte", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];
    const hundreds = ["", "Ciento", "Doscientos", "Trescientos", "Cuatrocientos", "Quinientos", "Seiscientos", "Setecientos", "Ochocientos", "Novecientos"];
    
    if (number === 100) return "Cien";
    if (number === 1000) return "Mil";
    if (number < 20) return ones[number];
    if (number < 100) return number % 10 === 0 ? tens[number / 10] : `${tens[Math.floor(number / 10)]} y ${ones[number % 10]}`;
    if (number < 1000) return number % 100 === 0 ? hundreds[number / 100] : `${hundreds[Math.floor(number / 100)]} ${this.traduccion(number % 100)}`;
    
    return "Numero fuera de rango";
  }

  traducirNumero() {
    const num = parseInt(this.numero, 10);
    this.resultado = isNaN(num) ? "Ingrese un número válido" : this.traduccion(num);
  }
}

