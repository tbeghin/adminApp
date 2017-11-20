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
  notes: Array<any>;
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
    });

    this.folders = [
      {
        name: 'Photos',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Recipes',
        updated: new Date('1/17/16'),
      },
      {
        name: 'Work',
        updated: new Date('1/28/16'),
      }
    ];
    this.notes = [
      {
        name: 'Vacation Itinerary',
        updated: new Date('2/20/16'),
      },
      {
        name: 'Kitchen Remodel',
        updated: new Date('1/18/16'),
      }
    ];
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
