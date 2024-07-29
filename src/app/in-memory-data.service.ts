import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', universe: 'DC' },
      { id: 13, name: 'Bombasto' , universe: 'Marvel' },
      { id: 14, name: 'Celeritas' , universe: 'Marvel' },
      { id: 15, name: 'Magneta' , universe: 'Capcom' },
      { id: 16, name: 'RubberMan' , universe: 'Capcom' },
      { id: 17, name: 'Dynama' , universe: 'Capcom' },
      { id: 18, name: 'Dr. IQ' , universe: 'Marvel' },
      { id: 19, name: 'Magma' , universe: 'Marvel' },
      { id: 20, name: 'Tornado' , universe: 'DC' },
      { id: 51, name: 'LED Chuyens', universe: 'Intergalactic' }
    ];
    return {heroes};
  }

  genId(heroes : Hero[]) : number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
