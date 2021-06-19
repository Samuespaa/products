import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fox-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.scss']
})
export class SloganComponent implements OnInit {
  @Input() public text: string;
  @Input() public delay: number;

  constructor() {
    this.text = '';
    this.delay = 0;
  }

  ngOnInit(): void {}
}
