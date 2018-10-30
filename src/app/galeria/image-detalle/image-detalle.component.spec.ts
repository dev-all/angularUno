import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetalleComponent } from './image-detalle.component';

describe('ImageDetalleComponent', () => {
  let component: ImageDetalleComponent;
  let fixture: ComponentFixture<ImageDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
