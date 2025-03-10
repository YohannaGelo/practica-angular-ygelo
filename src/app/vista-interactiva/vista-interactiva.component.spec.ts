import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInteractivaComponent } from './vista-interactiva.component';

describe('VistaInteractivaComponent', () => {
  let component: VistaInteractivaComponent;
  let fixture: ComponentFixture<VistaInteractivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaInteractivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaInteractivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
