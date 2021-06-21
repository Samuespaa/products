import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { LoginData } from '../../interfaces/login-data';

@Component({
  selector: 'fox-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public user: string;
  public password: string;
  public message: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.user = '';
    this.password = '';
    this.message = '';
  }

  ngOnInit(): void {}

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    this.login();
  }
}

  login() {
    let loginData: LoginData = {
      user: this.user,
      password: this.password
    };
    /* Camino normal para consultar al backend */
    // this.loginService.login(loginData).subscribe(resp => {
    //   this.navigateToProducts();
    // });
    /* Realizamos un fake login para la prueba */
    const loginResponse = this.loginService.fakeLogin(loginData);
    if (loginResponse.user.id) {
      this.navigateToProducts();
    }
    else {
      this.user = '';
      this.password = '';
      this.message = 'Usuario o contraseña incorrectos.'
    }
  }

  navigateToProducts() {
    this.router.navigate(['products']);
  }
}
