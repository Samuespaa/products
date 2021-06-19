import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SloganComponent } from './components/slogan/slogan.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    SloganComponent,
    LoginFormComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
      SloganComponent,
      LoginFormComponent,
      LogoComponent
  ]
})
export class SharedModule { }
