import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mform } from './mform';

describe('Mform', () => {
  let component: Mform;
  let fixture: ComponentFixture<Mform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
