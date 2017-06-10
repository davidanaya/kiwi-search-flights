import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <kw-search-bar></kw-search-bar>
    <kw-results-pane></kw-results-pane>
  `,
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor() {}
}