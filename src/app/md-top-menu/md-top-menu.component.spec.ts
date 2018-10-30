import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdTopMenuComponent } from './md-top-menu.component';

describe('MdTopMenuComponent', () => {
  let component: MdTopMenuComponent;
  let fixture: ComponentFixture<MdTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
