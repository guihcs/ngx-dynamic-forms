import {DynamicFormsComponent} from "../dynamic-forms.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormBuilder} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {of} from "rxjs";
import {ConfigurableInput, CustomInput, FormInput} from "dynamic-forms";
import {Component} from "@angular/core";


@Component({
  selector: '',
  template: ''
})
class CustomComponent implements ConfigurableInput {
  applyArguments(args: any): any {
  }

  getFormControl(): any {
  }

}

class FormObjectMock {

  @CustomInput(CustomComponent, {
    label: 'Custom Label'
  })
  customInput;

}

describe('Custom Component', () => {
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
});
