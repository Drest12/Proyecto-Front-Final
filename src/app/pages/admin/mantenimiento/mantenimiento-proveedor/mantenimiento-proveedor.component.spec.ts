import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoProveedorComponent } from './mantenimiento-proveedor.component';

describe('MantenimientoProveedorComponent', () => {
  let component: MantenimientoProveedorComponent;
  let fixture: ComponentFixture<MantenimientoProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
