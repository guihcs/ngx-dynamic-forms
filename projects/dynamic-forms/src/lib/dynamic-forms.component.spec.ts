import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsComponent } from './dynamic-forms.component';
import {FormBuilder} from "@angular/forms";
import {FormInput} from "dynamic-forms";
import {of} from "rxjs";
import {MatCheckbox} from "@angular/material/checkbox";

class FormObjectMock {
  @FormInput({
    label: 'Test',
    type: 'text'
  })
  test;

  @FormInput({
    label: 'Tch',
    type: 'checkbox'
  })
  tch;

}

describe('DynamicFormsComponent', () => {
  let component: DynamicFormsComponent;
  let fixture: ComponentFixture<DynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, MatCheckbox],
      declarations: [ DynamicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsComponent);
    component = fixture.componentInstance;
    component.objectObservable = of(new FormObjectMock());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have correct inputs', () => {
    const dynamicFormElement: HTMLElement = fixture.nativeElement;
    const innerFormElement: Element = dynamicFormElement.firstElementChild;
    expect(innerFormElement.children.length).toBe(2);
  });
});
