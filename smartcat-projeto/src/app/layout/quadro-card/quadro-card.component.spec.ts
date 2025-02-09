import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroCardComponent } from './quadro-card.component';

describe('QuadroCardComponent', () => {
  let component: QuadroCardComponent;
  let fixture: ComponentFixture<QuadroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuadroCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
