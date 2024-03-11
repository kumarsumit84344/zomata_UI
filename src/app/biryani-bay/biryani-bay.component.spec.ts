import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiryaniBayComponent } from './biryani-bay.component';

describe('BiryaniBayComponent', () => {
  let component: BiryaniBayComponent;
  let fixture: ComponentFixture<BiryaniBayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiryaniBayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiryaniBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
