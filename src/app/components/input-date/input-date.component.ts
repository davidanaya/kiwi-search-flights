import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'kw-input-date',
  template: `
    <md-input-container [formGroup]="parent">
      <input mdInput 
        [mdDatepicker]="picker" 
        [placeholder]="type" 
        [formControlName]="type" 
        (focus)="open()">
      <button mdSuffix [mdDatepickerToggle]="picker"></button>
    </md-input-container>
    <md-datepicker #picker></md-datepicker>
  `
})

export class InputDateComponent {

  @Input() parent: FormGroup;
  @Input() type: string;

  @ViewChild('picker') datepicker;

  constructor() {}

  open() {
    this.datepicker.open();
  }

}