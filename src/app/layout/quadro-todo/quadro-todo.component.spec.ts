import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroTodoComponent } from './quadro-todo.component';

describe('QuadroCardComponent', () => {
  let component: QuadroTodoComponent;
  let fixture: ComponentFixture<QuadroTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuadroTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadroTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
