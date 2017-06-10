import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdAutocompleteModule, 
  MdInputModule, 
  MdDatepickerModule,
  MdNativeDateModule } from '@angular/material';

import { Store } from './store';
import { AppComponent } from './app.component';

// containers
import { SearchBarComponent } from './containers/search-bar/search-bar.component';
import { ResultsPaneComponent } from './containers/results-pane/results-pane.component';
import { InputPlaceComponent } from './containers/input-place/input-place.component';

// components
import { ResultsListComponent } from './components/results-list/results-list.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { LegComponent } from './components/leg/leg.component';
import { ResultsFiltersComponent } from './components/results-filters/results-filters.component';
import { BannersComponent } from './components/banners/banners.component';

// services
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    MdAutocompleteModule,
    NoopAnimationsModule,
    MdInputModule,
    MdDatepickerModule,
    ReactiveFormsModule,
    MdNativeDateModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultsListComponent,
    ResultsPaneComponent,
    LegComponent,
    InputPlaceComponent,
    InputDateComponent,
    ResultsFiltersComponent,
    BannersComponent,
  ],
  providers: [
    SearchService,
    Store,
    DatePipe,
  ]
})
export class AppModule {}