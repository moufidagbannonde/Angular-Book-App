import { Component } from '@angular/core';

@Component({
  selector: 'app-book-footer',
  templateUrl: './book-footer.component.html',
  styleUrl: './book-footer.component.css'
})
export class BookFooterComponent {
  href1: string =  "https://symfony.com/";
  href2:string = "https://reactnative.dev/";
  href3:string = "https://www.python.org/";
}
