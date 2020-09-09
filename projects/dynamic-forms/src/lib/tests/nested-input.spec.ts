import {FormInput, NestedInput} from "dynamic-forms";
import {DynamicFormsComponent} from "../dynamic-forms.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormBuilder} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {of} from "rxjs";


class NestedInputModel {

}

class FormObjectMock {

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
});
