import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmcComponent } from './osmc.component';

describe('OsmcComponent', () => {
  let component: OsmcComponent;
  let fixture: ComponentFixture<OsmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
