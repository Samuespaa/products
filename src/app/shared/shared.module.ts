import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
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
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  exports: [
      SloganComponent,
      LoginFormComponent,
      LogoComponent,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule
  ]
})
export class SharedModule { }
