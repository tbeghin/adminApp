import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewModalComponent } from './treeview-modal.component';

describe('TreeviewModalComponent', () => {
  let component: TreeviewModalComponent;
  let fixture: ComponentFixture<TreeviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
