import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProatividadeComponent } from './proatividade.component';

describe('ProatividadeComponent', () => {
  let component: ProatividadeComponent;
  let fixture: ComponentFixture<ProatividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProatividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProatividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
