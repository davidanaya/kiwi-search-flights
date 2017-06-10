import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'kw-leg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="leg">
      <div class="airline">
        <img src="https://logos.skyscnr.com/images/airlines/favicon/{{airline}}.png" alt="{{airline}}"/>
      </div>
      <div class="leg-details">
        <div class="depart">
          <span class="date">
            {{ departureDate }}
          </span>
          <span class="times">
            {{ departureTime }}
          </span>
          <span class="stop-station">
            {{ origin }}
          </span>
        </div>
        <div class="stops">
          <span class="duration">
            {{ duration }}
          </span>
          <span class="leg-stops {{stopsClass}}">
            {{ stops }}
          </span>
        </div>
        <div class="arrive">
          <span class="date">
            {{ arrivalDate }}
          </span>
          <span class="times">
            {{ arrivalTime }}
          </span>
          <span class="stop-station">
            {{ destination }}
          </span>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['leg.component.scss']
})

export class LegComponent implements OnInit {

  @Input() detail: any;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {}

  get origin() {
    return this.detail.flyFrom;
  }

  get destination() {
    return this.detail.flyTo;
  }

  get airline() {
    return this.detail.airlines[0];
  }

  get duration() {
    return this.detail.fly_duration;
  }

  get stops() {
    const stops = this.detail.airlines.length - 1;
    
    if (!stops) return 'Direct';
    return stops === 1 ? '1 stop' : `${stops} stops`;
  }

  get stopsClass() {
    return this.stops === 'Direct' ? 'no-stops' : 'stops';
  }

  get departureTime() {
    return this.formatTime(this.detail.dTime);
  }

  get arrivalTime() {
    return this.formatTime(this.detail.aTime);
  }

  get departureDate() {
    return this.formatDate(this.detail.dTime);
  }

  get arrivalDate() {
    return this.formatDate(this.detail.aTime);
  }

  private formatTime(timestamp: string): string {
    const miliseconds = Number(timestamp) * 1000;
    return this.datePipe.transform(new Date(miliseconds), 'HH:mm');
  }

  private formatDate(timestamp: string): string {
    const miliseconds = Number(timestamp) * 1000;
    return this.datePipe.transform(new Date(miliseconds), 'MM/dd/y');
  }
}