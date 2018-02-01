import {Component, OnInit} from '@angular/core';
import {OsmcService} from '../services/osmc.service';
import {OsmcFile} from '../models/osmcFile';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddFolderComponent} from './osmc-modal/add-folder/add-folder/add-folder.component';

@Component({
  selector: 'app-osmc',
  templateUrl: './osmc.component.html',
  styleUrls: ['./osmc.component.css']
})
export class OsmcComponent implements OnInit {
  rootFile: OsmcFile;
  files: Array<OsmcFile>;
  path: string;

  constructor(private osmcService: OsmcService,
              public dialog: MatDialog) {
    this.path = '';
    this.files = Array<OsmcFile>();
    this.rootFile = new OsmcFile();
    this.rootFile.name = '..';
    this.rootFile.isFolder = true;
  }

  ngOnInit() {
    this.getAllNames(this.path);
  }

  openDialog(): void {
    const dialogConfig = {
      width: '500px',
      data: ''
    };
    const dialogRef = this.dialog.open(AddFolderComponent, dialogConfig as MatDialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.files.push(new OsmcFile(result, true));
      }
    });
  }

  goTo(file: OsmcFile) {
    if (file.isFolder) {
      this.getAllNames(`${this.path}\\${file.name}`);
    }
  }

  getAllNames(folderPath: string) {
    this.osmcService.getOsmcFile(folderPath).subscribe(data => {
      this.path = data.path;
      this.files = data.files;
    });
  }
}
