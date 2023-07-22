import { Hero } from '../hero';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // It is like declare "props"
  @Input() hero?: Hero;
}
