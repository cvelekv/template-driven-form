import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-control-value-accessor",
  templateUrl: "./control-value-accessor.component.html",
  styleUrls: ["./control-value-accessor.component.css"]
})
export class ControlValueAccessorComponent implements OnInit {
  customerForm: FormGroup;
  customer: any;
  message: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customer = {
      firstName: "Tina Reactive",
      phone: "123-123-1234"
    };

    this.customerForm = this.formBuilder.group({
      name: [this.customer.firstName],
      phone: [this.customer.phone]
    });
  }

  submit() {
    this.message =
      "You entered: " +
      this.customerForm.get("name").value +
      " " +
      this.customerForm.get("phone").value;
  }
}
