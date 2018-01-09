import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TitlePanelComponent} from './title-panel.component';
import {MaterialModule} from "../../material/material.module";

describe('TitlePanelComponent', () => {
  let component: TitlePanelComponent;
  let fixture: ComponentFixture<TitlePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitlePanelComponent],
      imports: [
        MaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePanelComponent);
    component = fixture.componentInstance;
    component.title = {
      name: "Dashboard",
      description: "Vu d'ensemble",
      icon: "dashboard"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
