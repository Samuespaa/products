import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fox-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() public showBrand: boolean;

  constructor() {
    this.showBrand = true;
  }

  ngOnInit(): void {}

}
