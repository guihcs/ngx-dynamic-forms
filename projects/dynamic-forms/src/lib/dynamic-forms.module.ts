import {NgModule} from '@angular/core';
import {DynamicFormsComponent} from './dynamic-forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LabelComponent} from './inputs/label/label.component';
import {SelectComponent} from './inputs/select/select.component';
import {TextInputComponent} from './inputs/text/text-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import { RawLabelComponent } from './inputs/raw-label/raw-label.component';
import { CheckboxComponent } from './inputs/checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    DynamicFormsComponent,
    LabelComponent,
    SelectComponent,
    TextInputComponent,
    RawLabelComponent,
    CheckboxComponent
  ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatCheckboxModule

    ],
  exports: [
    DynamicFormsComponent
  ],



})
export class DynamicFormsModule {
}
