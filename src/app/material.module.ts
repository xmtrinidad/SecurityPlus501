import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatExpansionModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
