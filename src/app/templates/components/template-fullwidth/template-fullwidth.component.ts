import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-fullwidth',
  templateUrl: './template-fullwidth.component.html',
  styleUrls: ['./template-fullwidth.component.scss'],
})
export class TemplateFullwidthComponent implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('CD TEMPLATE');
  }
}
