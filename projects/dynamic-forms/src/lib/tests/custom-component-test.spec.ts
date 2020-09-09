import {DynamicFormsComponent} from "../dynamic-forms.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {of} from "rxjs";
import {ConfigurableInput, CustomInput, FormInput} from "dynamic-forms";
import {Component, DebugElement} from "@angular/core";


@Component({
  selector: '',
  template: '<h1>{{args}}</h1>'
})
class CustomComponent implements ConfigurableInput {

  args;
  formControl = new FormControl('');

  applyArguments(args: any): any {
    this.args = JSON.stringify(args);
    if (args.descriptor.args.t3) this.formControl.setValue('test');
  }


  getFormControl(): any {
    return this.formControl;
  }

}

class FormObjectMock {

  @CustomInput(CustomComponent, {
    label: 'Custom Label',
    args: {t1: 1, t2: 2, t3: true},
    required: true,
    errorMessage: 'error message'
  })
  customInput = 12;

}

describe('Custom Component', () => {
  let component: DynamicFormsComponent;
  let fixture: ComponentFixture<DynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, ReactiveFormsModule],
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

  it('should have correct input', () => {
    const rootForm = fixture.debugElement.children[0];
    const childElement: HTMLElement = rootForm.children[0].children[0].nativeElement;
    expect(rootForm.children.length).toBe(1);
    expect(childElement.tagName).toBe("H1");
  });

  it('should have correct arguments',  () => {
    const rootForm = fixture.debugElement.children[0];
    const childElement: HTMLElement = rootForm.children[0].children[0].nativeElement;

    const argsObject = JSON.parse(childElement.innerText);
    expect(argsObject).toEqual({
      type: 'custom-input',
      descriptor: {
        label: 'Custom Label',
        args: {t1: 1, t2: 2, t3: true},
        required: true,
        errorMessage: 'error message'
      },
      defaultValue: 12
    });

  });

  it('should return correct value', () => {
    const formResult = component.getResult();

    expect(formResult).toEqual({
      customInput: 'test'
    });
  });
});
