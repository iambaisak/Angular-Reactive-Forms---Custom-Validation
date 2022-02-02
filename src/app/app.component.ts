import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { gte } from "./gte.validator";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {}

  myForm = new FormGroup({
    numVal: new FormControl("", [gte])
  });

  get numVal() {
    return this.myForm.get("numVal");
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
