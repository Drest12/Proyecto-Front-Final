import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoProductoComponent } from './mantenimiento-producto.component';

describe('MantenimientoProductoComponent', () => {
  let component: MantenimientoProductoComponent;
  let fixture: ComponentFixture<MantenimientoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
