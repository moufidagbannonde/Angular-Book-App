import { Component } from '@angular/core';

// @component: décorateur
@Component({
  // sélecteur
  selector: 'app-root',
  // url du template ou du html à afficher
  templateUrl: './app.component.html',
  // url du style à appliquer
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Book-App';
}
