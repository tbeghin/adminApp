import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalExampleComponent } from './test-modal-example.component';

describe('TestModalExampleComponent', () => {
  let component: TestModalExampleComponent;
  let fixture: ComponentFixture<TestModalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestModalExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
