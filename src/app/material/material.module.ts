import {NgModule} from '@angular/core';
import {
  MatTabsModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}
