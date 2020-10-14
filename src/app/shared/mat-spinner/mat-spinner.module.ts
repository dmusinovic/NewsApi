import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSpinnerDirective } from './mat-spinner.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MatSpinnerDirective],
  exports: [MatSpinnerDirective]
})
export class MatSpinnerDirectiveModule { }
