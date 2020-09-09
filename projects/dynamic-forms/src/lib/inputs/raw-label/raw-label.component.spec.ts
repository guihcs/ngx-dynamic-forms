import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawLabelComponent } from './raw-label.component';

describe('RawLabelComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({declarations: [RawLabelComponent]});
    const fixture = TestBed.createComponent(RawLabelComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
