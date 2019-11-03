import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;

  constructor(private frombuilder:FormBuilder) {
  	this.contactForm = this.frombuilder.group({
  		name:["", Validators.required],
  		email:["", [Validators.required, Validators.email]]
  	})
   }

  ngOnInit() {
  }

  handleFormSubmit = () => {
  	console.log(this.contactForm.value,"data")
  }

}
