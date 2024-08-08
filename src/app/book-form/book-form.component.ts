import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { ServiceBooksService } from '../service-books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  // valeur affiche qui viendra du parent BookComponent
  @Input({ required: true }) affiche!: boolean;

  inputForm = new FormGroup({
      // title: new FormControl(''),
      // author: new FormControl(''),

  })
  validationFormulaire(){
    console.log("Button clicked !")
  }
  constructor(private BooksServices: ServiceBooksService) { }

}
