import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {OsmcService} from '../../../../services/osmc.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent implements OnInit {
  folderName: FormControl;

  constructor(private osmcService: OsmcService,
              public dialogRef: MatDialogRef<AddFolderComponent>,
              @Inject(MAT_DIALOG_DATA) public path: string) {
  }

  ngOnInit() {
    this.folderName = new FormControl();
  }

  onSubmit(): void {
    console.log(this.folderName);
    if (this.folderName.valid) {
      const newFolder: string = this.folderName.value;
      this.dialogRef.close(newFolder);
      this.osmcService.addFolder(this.path, newFolder).subscribe(
        newPath => this.dialogRef.close(newPath),
        error => console.error('Une erreur est survenue', error)
      );
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
