import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLogoutComponent } from './botao-logout.component';

describe('BotaoLogoutComponent', () => {
  let component: BotaoLogoutComponent;
  let fixture: ComponentFixture<BotaoLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoLogoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
