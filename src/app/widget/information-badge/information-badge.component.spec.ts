import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBadgeComponent } from './information-badge.component';

describe('InformationBadgeComponent', () => {
  let component: InformationBadgeComponent;
  let fixture: ComponentFixture<InformationBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
