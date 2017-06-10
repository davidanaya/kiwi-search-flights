import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'kw-search-bar',
  template: `
    <header>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <kw-input-place [parent]="form" [type]="'from'"></kw-input-place>

        <kw-input-place [parent]="form" [type]="'to'"></kw-input-place>

        <kw-input-date [parent]="form" [type]="'depart'"></kw-input-date>

        <button class="btn" type="submit" [disabled]="form.invalid">Search</button>
      </form>
    </header>
  `,
  styleUrls: ['search-bar.component.scss']
})

export class SearchBarComponent implements OnInit, OnDestroy {
  
  form = this.fb.group({
    from: '',
    to: '',
    depart: ''
  });

  subscription: Subscription;

  constructor(private fb: FormBuilder,
              private service: SearchService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.subscription = this.service
      .getFlights(this.form.value)
      .first()
      .subscribe();
  }
}