import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentsComponent } from './deparments.component';

describe('DeparmentsComponent', () => {
  let component: DeparmentsComponent;
  let fixture: ComponentFixture<DeparmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
