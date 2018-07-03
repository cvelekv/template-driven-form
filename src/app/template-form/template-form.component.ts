import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero';

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"]
})
export class TemplateFormComponent implements OnInit {
  model: Hero;
  powers: string[];
  submitted: boolean = false;
  constructor() {}

  ngOnInit() {
    this.model = new Hero(18, "Tornado", "Turbulent Breeze", "Willie Wind");
    this.powers = [
      "Really Smart",
      "Turbulent Breeze",
      "Super Hot",
      "Weather Changer"
    ];
  }

  onSubmit() {
    this.submitted = true;
  }
}
