import {Component, OnInit} from '@angular/core';
import {OsmcService} from './osmc.service';
import {OsmcFile} from '../models/osmcFile';

@Component({
  selector: 'app-osmc',
  templateUrl: './osmc.component.html',
  styleUrls: ['./osmc.component.css']
})
export class OsmcComponent implements OnInit {
  folders: Array<OsmcFile>;
  files: Array<OsmcFile>;
  updateName: any;

  constructor(private osmcService: OsmcService) {
    this.updateName = {
      before: '',
      after: ''
    };
  }

  ngOnInit() {
    this.getAllNames();
  }

  getAllNames() {
    this.osmcService.getOsmcFile().then(data => {
      this.folders = data.filter(file => file.isFolder);
      this.files = data.filter(file => !file.isFolder);
    });
  }

  changeName(fileName) {
    this.updateName.before = fileName;
    this.updateName.after = fileName;
  }

  save() {
    this.osmcService.updateFileName(this.updateName.before, this.updateName.after).then(
      x => {
        this.getAllNames();
        this.updateName.before = '';
        this.updateName.after = '';
      }
    );
  }
}
