import { Injectable } from '@angular/core';
import { BOOKLIST } from '../mock-books';
import { BookInterface } from './book-interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceBooksService {
books: BookInterface[] = BOOKLIST;

  constructor() { }

  // méthode de stockage des données

  getBooks(): BookInterface[]{
    return this.books;
  }

}
