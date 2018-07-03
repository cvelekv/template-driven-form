import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../shared/hero';
import { ValidationService } from '../shared/validation.service';

@Component({
  selector: "app-update-on",
  templateUrl: "./update-on.component.html",
  styleUrls: ["./update-on.component.css"]
})
export class UpdateOnComponent implements OnInit {
  model: Hero;
  submittedModel: Hero;
  heroForm: FormGroup;
  powers: string[];
  templateSubmitted = false;
  reactiveSubmitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.model = new Hero(
      18,
      "Dr IQ",
      "Really Smart",
      "Chuck Overstreet",
      "iq@superhero.com"
    );
    this.powers = [
      "Really Smart",
      "Turbulent Breeze",
      "Super Hot",
      "Weather Changer"
    ];

    this.heroForm = new FormGroup(
      {
        //Can individually add updateOn to FormControls
        //name:   new FormControl(this.model.name, { validators: Validators.required, updateOn: 'blur' }),
        name: new FormControl(this.model.name, Validators.required),
        alterEgo: new FormControl(this.model.alterEgo, Validators.required),
        email: new FormControl(this.model.email, {
          validators: [Validators.required, ValidationService.emailValidator]
        }),
        power: new FormControl(this.model.power, Validators.required)
      },
      { updateOn: "blur" }
    );
  }

  updateOnForAll() {
    //this.heroForm.setValue({ updateOn: 'blue'});
  }

  submit() {
    this.templateSubmitted = true;
  }

  reactiveSubmit() {
    this.reactiveSubmitted = true;
    this.submittedModel = this.heroForm.value;
  }
}
