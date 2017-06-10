import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'kw-input-place',
  template: `
    <div [formGroup]="parent">
      <md-input-container>
        <input mdInput type="text" placeholder="{{type}}" formControlName="{{type}}" [mdAutocomplete]="auto"/>
      </md-input-container>

      <md-autocomplete #auto="mdAutocomplete" [displayWith]="displayFn">
        <md-option *ngFor="let place of filteredPlaces$ | async" [value]="place">
          {{ place.value }}
        </md-option>
      </md-autocomplete>
    </div>
  `,
  styleUrls: ['input-place.component.scss']
})

export class InputPlaceComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() type: string;

  filteredPlaces$: Observable<any[]>;

  constructor(private service: SearchService) {}

  ngOnInit() {
    this.parent.get(this.type)
      .valueChanges.subscribe(value => {
        this.filteredPlaces$ = this.service.getPlaces(value);
      });
  }

  displayFn(place: any): string {
    return place ? place.value : place;
  }

}