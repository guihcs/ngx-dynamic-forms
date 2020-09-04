import { Component, OnInit } from '@angular/core';
import {ConfigurableInput} from "dynamic-forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  applyArguments(args: any): any {
  }

  getFormControl(): any {
    return this.formControl;
  }

}
