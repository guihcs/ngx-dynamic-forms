import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TextInputComponent} from './text-input.component';

describe('TextComponent', () => {

  it('should create', () => {
    TestBed.configureTestingModule({declarations: [TextInputComponent]});
    const fixture = TestBed.createComponent(TextInputComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
