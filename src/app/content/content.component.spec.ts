import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentComponent} from './content.component';
import {MaterialModule} from '../material/material.module';
import {MainHeaderModule} from '../main-header/main-header.module';
import {MainSidebarModule} from '../main-sidebar/main-sidebar.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {TreeviewService} from '../services/treeview.service';
import {Observable} from 'rxjs/Observable';
import {Treeview} from '../models/treeview';

class MockTreeviewService extends TreeviewService {
  getTreeview(): Observable<Treeview[]> {
    return new Observable<Treeview[]>();
  }
}

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent
      ],
      imports: [
        CommonModule,
        MainHeaderModule,
        MainSidebarModule,
        DashboardModule,
        RouterModule,
        MaterialModule
      ],
      providers: [
        {
          provide: TreeviewService,
          useClass: MockTreeviewService
        },
        {
          provide: Router,
          useClass: class {
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
