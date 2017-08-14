import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-treeview-item',
  templateUrl: './treeview-item.component.html',
  styleUrls: ['./treeview-item.component.css']
})
export class TreeviewItemComponent implements OnInit {
  @Input() item: any;
  isEditable: boolean;
  url: FormControl;
  description: FormControl;
  grade: FormControl;
  itemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.url = new FormControl('', []);
    this.description = new FormControl('', []);
    this.grade = new FormControl('', []);
    this.itemForm = this.formBuilder.group({
      url: this.url,
      description: this.description,
      grade: this.grade
    });
  }

  memorize(form: any) {
    console.log(form.value);
    console.log(form.errors);
    this.editItem();
  }

  editItem() {
    this.isEditable = !this.isEditable;
  }
}
