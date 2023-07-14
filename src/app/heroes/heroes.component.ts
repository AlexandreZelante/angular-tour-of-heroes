import { Component } from '@angular/core';
import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';

@Component({
  // CSS element selector
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // Location of the components private CSS styles
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = HEROES
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
