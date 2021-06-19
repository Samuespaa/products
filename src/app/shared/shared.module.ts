import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SloganComponent } from './components/slogan/slogan.component';

@NgModule({
  declarations: [
    SloganComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
      SloganComponent
  ]
})
export class SharedModule { }
