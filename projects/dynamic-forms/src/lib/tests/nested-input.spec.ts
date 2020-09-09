import {FormInput, NestedInput} from "dynamic-forms";
import {DynamicFormsComponent} from "../dynamic-forms.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormBuilder} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {of} from "rxjs";


class NestedInputModel {

  @FormInput({label: 'f1'})
  field1 = 1;
  @FormInput({label: 'f2'})
  field2 = 2;

}

class FormObjectMock {
  @FormInput({label: 'f1'})
  field1 = 1;

  @NestedInput('Title', 1)
  nestedInput = new NestedInputModel();
}

describe('Nested Input', () => {
  let component: DynamicFormsComponent;
  let fixture: ComponentFixture<DynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder],
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
    expect(rootForm.children.length).toBe(4);
  });

  it('should return correct value', () => {
    const formResult = component.getResult();

    expect(formResult).toEqual({
      field1: 1,
      nestedInput: {
        field1: 1,
        field2: 2
      }
    });
  });
});
