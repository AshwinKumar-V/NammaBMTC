import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminanalysisComponent } from './adminanalysis.component';

describe('AdminanalysisComponent', () => {
  let component: AdminanalysisComponent;
  let fixture: ComponentFixture<AdminanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
