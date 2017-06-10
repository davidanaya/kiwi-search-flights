import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Store } from '../store';
import { Search } from '../state';

interface Param {
  type: string,
  value: string
}

@Injectable()
export class SearchService {

  api = process.env.SETTINGS.API;

  constructor(private http: Http,
              private store: Store,
              private datePipe: DatePipe) {}

  getFlights(search: Search): Observable<any> {
    const date = search.depart ? this.datePipe.transform(search.depart, 'dd/MM/y') : '';
    const params = [
      { type: 'flyFrom', value: search.from.id },
      { type: 'to', value: search.to.id },
      { type: 'dateFrom', value: date }
    ]

    this.store.set('search', search);
    return this.http
    .get(`${this.api}/flights?v=2&locale=en&${this.buildQuerySearch(params)}`)
    .map(res => res.json())
    .do(next => {
      this.store.set('flights', next.data);
      this.store.set('currency', next.currency);
    });
  }

  getPlaces(str: string): Observable<any[]> {
    const params = [
      { type: 'term', value: str }
    ]
    
    return this.http
    .get(`${this.api}/places?v=2&locale=en&${this.buildQuerySearch(params)}`)
    .map(res => res.json())
    .catch(err => Observable.of([]));
  }

  private buildQuerySearch(params: Param[]): string {
    if (!params) return '';
    return params
      .map(param => `${param.type}=${param.value}`)
      .join('&');
  }
   
}