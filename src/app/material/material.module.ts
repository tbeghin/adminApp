import {NgModule} from '@angular/core';
import {
  MatTabsModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatExpansionModule,
  MatPaginatorIntl
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
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatExpansionModule
  ]
})
export class MaterialModule {
  constructor(private matPaginatorIntl: MatPaginatorIntl) {
    this.matPaginatorIntl.itemsPerPageLabel = "items par page";
    this.matPaginatorIntl.previousPageLabel = "précédent";
    this.matPaginatorIntl.nextPageLabel = "suivant";
    this.matPaginatorIntl.getRangeLabel =
      (page: number, pageSize: number, length: number) => {
        if (length == 0 || pageSize == 0) {
          return `0 sur ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} sur ${length}`;
      };
  }
}
