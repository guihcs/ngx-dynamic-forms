import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import {MatCheckbox} from "@angular/material/checkbox";

describe('CheckboxComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
      providers: [MatCheckbox]
    });
    const fixture = TestBed.createComponent(CheckboxComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
