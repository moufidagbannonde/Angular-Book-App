import { Output, EventEmitter,Component } from '@angular/core';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrl: './book-header.component.css'
})
export class BookHeaderComponent {
   logo: string = "../assets/capeverdeflag.jpg";
   href1: string =  "https://symfony.com/";
   href2:string = "https://vee-validate.logaretm.com/v4/";
   href3:string = "https://www.python.org/";
   // passage d'une valeur de l'enfant vers le parent
   // instance de la classe EventEmitter
   @Output() passValue = new EventEmitter<boolean>();

  affiche: boolean = false;
   display():void {
    // affiche le formulaire et au clic du bouton "formulaire d'ajout"
    this.affiche = !this.affiche;
    // passer la valeur de affiche à la variable passValue 
    this.passValue.emit(this.affiche);
  }
}
