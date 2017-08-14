import {Component, OnInit} from '@angular/core';
import {OsmcService} from './osmc.service';

@Component({
  selector: 'app-osmc',
  templateUrl: './osmc.component.html',
  styleUrls: ['./osmc.component.css']
})
export class OsmcComponent implements OnInit {
  listFile: Array<any>;
  folders: Array<any>;
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
      this.listFile = data.file;
      this.folders = data.directory;
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
