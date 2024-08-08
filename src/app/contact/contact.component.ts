import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
  name : new FormControl(''),
  email : new FormControl(''),
  number : new FormControl(''),
  msg : new FormControl(''),
  })
  onSubmit(){
    console.log(this.contactForm.value);

    // console.warn(this.contactForm.value)
  }
}
