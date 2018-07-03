import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../shared/hero';
import { ValidationService } from '../shared/validation.service';

@Component({
  selector: "app-reactive-dynamic-form",
  templateUrl: "./reactive-dynamic-form.component.html",
  styleUrls: ["./reactive-dynamic-form.component.css"]
})
export class ReactiveDynamicFormComponent implements OnInit {
  model: Hero;
  heroForm: FormGroup;
  formModelProps = [];
  submitted: boolean;
  constructor() {}

  ngOnInit() {
    this.model = new Hero(
      18,
      "Dr IQ",
      "Really Smart",
      "Chuck Overstreet",
      "iq@superhero.com"
    );

    const formModel = {};
    let validators = [Validators.required];
    for (const prop of Object.keys(this.model)) {
      if (prop.indexOf("email") !== -1)
        validators.push(ValidationService.emailValidator);
      formModel[prop] = new FormControl(this.model[prop], validators);
      this.formModelProps.push(prop);
    }
    this.heroForm = new FormGroup(formModel);
  }
  submit() {
    this.submitted = true;
  }
}
