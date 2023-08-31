import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VonzServicesComponent } from './vonz-services.component';

describe('VonzServicesComponent', () => {
  let component: VonzServicesComponent;
  let fixture: ComponentFixture<VonzServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VonzServicesComponent]
    });
    fixture = TestBed.createComponent(VonzServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
