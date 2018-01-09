import {TestBed, async, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController, RequestMatch} from '@angular/common/http/testing';

import {TreeviewService} from './treeview.service';
import {Treeview} from "../models/treeview";

describe('TreeviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TreeviewService]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be created', inject([TreeviewService], (service: TreeviewService) => {
    expect(service).toBeTruthy();
  }));

  it('getTreeview success', async(inject(
    [TreeviewService, HttpTestingController],
    (service: TreeviewService, backend: HttpTestingController) => {
      service.getTreeview().subscribe();
      backend.match('http://localhost:3061/api/treeview')
    })));

  it('saveTreeview success', async(inject(
    [TreeviewService, HttpTestingController],
    (service: TreeviewService, backend: HttpTestingController) => {
      service.saveTreeview(new Treeview()).subscribe();
      backend.match('http://localhost:3061/api/treeview')
    })));

  it('updateTreeview success', async(inject(
    [TreeviewService, HttpTestingController],
    (service: TreeviewService, backend: HttpTestingController) => {
      let treeview = new Treeview();
      treeview._id = "123";
      let request: RequestMatch = {
        method: 'PUT',
        url: 'http://localhost:3061/api/treeview/123'
      };
      service.updateTreeview(treeview).subscribe();
      backend.match(request);
    })));

  it('deleteTreeview success', async(inject(
    [TreeviewService, HttpTestingController],
    (service: TreeviewService, backend: HttpTestingController) => {
      let request: RequestMatch = {
        method: 'DELETE',
        url: 'http://localhost:3061/api/treeview/123'
      };
      service.deleteTreeview("123").subscribe();
      backend.match(request);
    })));
});
