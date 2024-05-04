import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';



@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FeatureComponent],
  bootstrap:[FeatureComponent]
})
export class FeatureModule { }
