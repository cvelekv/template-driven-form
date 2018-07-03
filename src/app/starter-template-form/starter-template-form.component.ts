import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-starter-template-form",
  templateUrl: "./starter-template-form.component.html",
  styleUrls: ["./starter-template-form.component.css"]
})
export class StarterTemplateFormComponent implements OnInit {
  customer: any;
  message: string;

  constructor() {}

  ngOnInit() {
    this.customer = {
      firstName: "Fred Template"
    };
  }

  onSubmit() {
    this.message = "You typed " + this.customer.firstName;
  }
}
