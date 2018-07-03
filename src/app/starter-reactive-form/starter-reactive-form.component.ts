import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-starter-reactive-form",
  templateUrl: "./starter-reactive-form.component.html",
  styleUrls: ["./starter-reactive-form.component.css"]
})
export class StarterReactiveFormComponent implements OnInit {
  customerForm: FormGroup;
  customer: any;
  message: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customer = {
      firstName: "Tina Reactive"
    };
    this.customerForm = this.formBuilder.group({
      firstName: [this.customer.firstName, Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    this.message = "You typed: " + form.controls.firstName.value;
  }
}
