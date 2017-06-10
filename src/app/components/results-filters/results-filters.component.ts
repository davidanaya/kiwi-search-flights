import { Component } from '@angular/core';

@Component({
  selector: 'kw-results-filters',
  template: `
    <img class="filters" src="assets/img/filters.png" alt="filters" (click)="showAlert()"/>
  `
})

export class ResultsFiltersComponent {
  
  constructor() {}

  showAlert() {
    alert("I'm just a picture! 😆");
  }
}