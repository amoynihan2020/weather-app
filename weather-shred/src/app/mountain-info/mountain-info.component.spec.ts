import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainInfoComponent } from './mountain-info.component';

describe('MountainInfoComponent', () => {
  let component: MountainInfoComponent;
  let fixture: ComponentFixture<MountainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
