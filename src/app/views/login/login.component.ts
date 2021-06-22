import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fox-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public sloganTexts: string[];

  constructor() {
    this.sloganTexts = ['Dormir', 'es', 'salud'];
  }

  ngOnInit(): void {}
}
