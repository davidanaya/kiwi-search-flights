import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kw-results-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul *ngFor="let item of list" class="list">
      <li class="list-item">
        <article class="card">
          <div class="card-body">
            <kw-leg
              [detail]="item">
            </kw-leg>
          </div>
          <div class="quote">
            <div class="price">
              {{ item.price }} {{ currency }}
            </div>
            <button class="btn">
              Select →
            </button>
          </div>
        </article>
      </li>
    </ul>
  `,
  styleUrls: ['results-list.component.scss']
})

export class ResultsListComponent implements OnInit {
  
  @Input() list: any[];
  @Input() currency: string;

  constructor() {}

  ngOnInit() {
  }

}