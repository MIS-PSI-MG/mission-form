import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xform } from './xform';

describe('Xform', () => {
  let component: Xform;
  let fixture: ComponentFixture<Xform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
