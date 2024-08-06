import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  // valeur affiche qui viendra du parent BookComponent
@Input({required: true}) affiche!: boolean;


}
