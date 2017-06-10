import { Http, Response, ResponseOptions } from '@angular/http';
import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { SearchService } from './search.service';
import { placesMock, flightsMock } from './search.mocks';
import { Store } from '../store';
import { Search } from '../state';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

function createResponse(body) {
  return Observable.of(
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  );
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

describe('SearchService', () => {

  let http: Http;
  let service: SearchService;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        SearchService,
        Store,
        DatePipe,
        { provide: Http, useClass: MockHttp }
      ]
    });
    http = bed.get(Http);
    service = bed.get(SearchService);
  });

  it('should get places', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...placesMock]));

    service
      .getPlaces('Brn')
      .subscribe(result => {
        expect(result.length).toBe(3);
        expect(result).toEqual(placesMock);
      });
  });

  it('should get flights', () => {
    spyOn(http, 'get').and.returnValue(createResponse({...flightsMock}));

    const search: Search = {
      from: { id: 'prague_cz' },
      to: { id: 'paris_fr' },
      depart: undefined
    }

    service
      .getFlights(search)
      .subscribe(result => {
        expect(result.data.length).toBe(10);
        expect(result).toEqual(flightsMock);
      });
  });

});