import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kw-banners',
  template: `
    <div class="banners">
      <img *ngFor="let img of images" class="banner" src="src/assets/img/{{img}}.png" alt="banners"/>
    </div>
  `,
  styleUrls: ['banners.component.scss']
})

export class BannersComponent implements OnInit {

  images: number[];

  constructor() {}

  ngOnInit() {
    this.images = Array(21).fill(undefined).map((v, index) => index + 1);
  }
}