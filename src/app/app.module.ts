import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookHeaderComponent } from './book-header/book-header.component';
import { BookFooterComponent } from './book-footer/book-footer.component';
import { BookFormComponent } from './book-form/book-form.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    BookHeaderComponent,
    BookFooterComponent,
    BookFormComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
