import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  // variable booléenne qui n'est pas nulle
getChildInfo!: boolean ;
  recupValue(val: boolean){
    // assignation de la valeur de val à la variable getChilInfo
    console.log("valeur récupérée : ", val);
    this.getChildInfo = val;
  }
}
