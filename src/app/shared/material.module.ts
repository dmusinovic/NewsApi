import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const materialModules: Array<any> = [
  // Include specific Angular Material module(s) when needed

     MatSidenavModule,
     MatToolbarModule,
      MatCardModule,
  // MatListModule,
      MatInputModule,
      MatButtonModule,
  // MatGridListModule,
  // MatIconModule,
  // MatTableModule,
      MatSnackBarModule,
  // MatProgressSpinnerModule,
      MatSelectModule,
  // MatOptionModule,
   //   MatCheckboxModule,
  // MatRadioModule,
  // MatMenuModule,
  MatIconModule,
  // MatTooltipModule,
  // MatDatepickerModule,
   //   MatDialogModule,
  // MatPaginatorModule,
  // MatExpansionModule,
  // MatAutocompleteModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
    duration: 2500,
    verticalPosition: 'top',
    horizontalPosition: 'center',
    panelClass: 'am-snack-bar-container'
  }}],
  entryComponents: []
})

export class MaterialModule { }
