import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenPhimComponent } from './ten-phim.component';

describe('TenPhimComponent', () => {
  let component: TenPhimComponent;
  let fixture: ComponentFixture<TenPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
