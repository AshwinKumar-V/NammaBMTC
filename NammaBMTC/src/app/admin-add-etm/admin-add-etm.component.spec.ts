import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddETMComponent } from './admin-add-etm.component';

describe('AdminAddETMComponent', () => {
  let component: AdminAddETMComponent;
  let fixture: ComponentFixture<AdminAddETMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddETMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddETMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
