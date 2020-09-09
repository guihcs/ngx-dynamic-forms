import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectComponent} from './select.component';

describe('SelectComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({declarations: [SelectComponent]});
    const fixture = TestBed.createComponent(SelectComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
