import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormUsingFb } from './reactive-form-using-fb';

describe('ReactiveFormUsingFb', () => {
  let component: ReactiveFormUsingFb;
  let fixture: ComponentFixture<ReactiveFormUsingFb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormUsingFb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormUsingFb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
