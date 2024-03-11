import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiryaniComponent } from './biryani.component';

describe('BiryaniComponent', () => {
  let component: BiryaniComponent;
  let fixture: ComponentFixture<BiryaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiryaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
