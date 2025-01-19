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
      <app-housing-location *ngFor="let housingLocation of housingLocationList"[housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl= 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: Housinglocation[]= [
    {
      id: 0,
      name: 'Expresso',
      photo: `assets/images/expresso.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 2,
      name: 'Ristretto',
      photo: `assets/images/ristretto.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 3,
      name: 'Cortado or macchiato',
      photo: `assets/images/cortado.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 4,
      name: 'Americano',
      photo: `assets/images/americano.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 5,
      name: 'Lungo/large',
      photo: `assets/images/lungo.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 6,
      name: 'Carajillo',
      photo: `assets/images/carajillo.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 7,
      name: 'Coffee with milk',
      photo: `assets/images/cofee_with_milk.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 8,
      name: 'Chocolate coffee',
      photo: `assets/images/chocolate_coffee.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 9,
      name: 'Capuchino',
      photo: `assets/images/capuchino.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 10,
      name: 'Mocca',
      photo: `assets/images/mocca.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 11,
      name: 'Irish coffee',
      photo: `assets/images/irish_coffee.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 12,
      name: 'Viennese coffee',
      photo: `assets/images/viennese_coffee.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 13,
      name: 'Frappé',
      photo: `assets/images/frappe.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 14,
      name: 'Azteca',
      photo: `assets/images/azteca.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 15,
      name: 'Arabica coffee',
      photo: `assets/images/arabica.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 16,
      name: 'Robusta coffee',
      photo: `assets/images/robusta.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
    {
      id: 17,
      name: 'Combinations',
      photo: `assets/images/combinations.jpg`,
      availableUnits: 99,
      place: 'Test place',
      state: 'ST'
    },
  ];
}