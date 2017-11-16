import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
