import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingComponentComponent } from './databinding-component.component';

describe('DatabindingComponentComponent', () => {
  let component: DatabindingComponentComponent;
  let fixture: ComponentFixture<DatabindingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabindingComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
