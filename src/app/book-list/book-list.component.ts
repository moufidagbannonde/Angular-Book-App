import { Component } from '@angular/core';
import { NavigationSkipped } from '@angular/router';

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

export class BookListComponent {
    name:string = "Moufid";
    books = [
      {id:1, title: "Le royaume du Maroc ",author:"Mohamed Guendouzi", statut:"En attente"},
      {id:2, title: "Las Palancas Negras",author:"Thiago Maria Neves", statut: "En cours"},
      {id:3, title: "Quasimodo",author:"Victor Hugo", statut: "Terminé"},
      {id:4, title: "Tubaroes Azuis",author:"Rayleigh Fernandinho", statut: "En attente"},
    ]
}
