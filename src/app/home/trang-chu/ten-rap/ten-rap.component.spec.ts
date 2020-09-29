import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenRapComponent } from './ten-rap.component';

describe('TenRapComponent', () => {
  let component: TenRapComponent;
  let fixture: ComponentFixture<TenRapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenRapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenRapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
