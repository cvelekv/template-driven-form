import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"]
})
export class BasicFormComponent implements OnInit {
  form: any;
  powers: string[];
  submitted: boolean = false;

  constructor() {}

  ngOnInit() {
    this.powers = [
      "Really Smart",
      "Turbulent Breeze",
      "Super Hot",
      "Weather Changer"
    ];
  }

  onSubmit(form: any) {
    this.submitted = true;
    this.form = form;
  }
}
