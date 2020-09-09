import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LabelComponent} from './label.component';

describe('LabelComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({declarations: [LabelComponent]});
    const fixture = TestBed.createComponent(LabelComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
