import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {Housinglocation} from '../housinglocation';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by drink" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl= 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: Housinglocation= {
    id: 9999,
    name: 'Black Cofee',
    photo: `assets/images/black_cofee.jpg`,
    availableUnits: 99,
    place: 'Test place',
    state: 'ST'
  };
}