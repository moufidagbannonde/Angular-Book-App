import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../book-interface';
import { ServiceBooksService } from '../service-books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

// @Component({
//   selector: 'app-book-list',
//   template: `
//   <h1>Bonjour </h1>
//       <nav>
//           <ul>
//               <li>Home</li>
//               <li>Contact</li>
//               <li>About</li>
//             </ul>
//           </nav>
//   `,
//   styles: `
//     li {
//       list-style: none;
//       color: blue
//     },
//     ul {
//       display: flex;
//       justify-content: space-between;
//       }
//     nav {
//       background-color: #2345;
//       border-radius: 20px;
//       width: 50%;
//       margin: 0 auto
//     }
//   `
// })

export class BookListComponent implements OnInit{
  books ?: BookInterface[];
    name:string = "Moufid";
    constructor(private BooksService: ServiceBooksService){
    }
    ngOnInit(){
        this.books = this.BooksService.getBooks();
    }

  
}
