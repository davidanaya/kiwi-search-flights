import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '../../store';

@Component({
  selector: 'kw-results-pane',
  template: `
    <section class="results-pane" *ngIf="flights$ | async; else banners">
      <kw-results-filters class="filters">
      </kw-results-filters>
      <kw-results-list class="results"
        [currency]="currency$ | async"
        [list]="flights$ | async">
      </kw-results-list>
    </section>

    <ng-template #banners>
      <kw-banners></kw-banners>
    </ng-template>
  `,
  styleUrls: ['results-pane.component.scss']
})

export class ResultsPaneComponent implements OnInit {
  
  flights$: Observable<any[]>;
  currency$: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.flights$ = this.store.select('flights');
    this.currency$ = this.store.select('currency');
  }

}