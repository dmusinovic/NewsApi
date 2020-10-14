import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSpinnerDirectiveModule } from './mat-spinner/mat-spinner.module';
import { MaterialModule } from './material.module';

const sharedModules: Array<any> = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
  MatSpinnerDirectiveModule,
  FlexLayoutModule,
];

@NgModule({
  imports: sharedModules,
  exports: [sharedModules],
  declarations: [
  ]
})

export class SharedModule { }
