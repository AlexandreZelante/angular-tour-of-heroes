import { Hero } from '../hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // It is like declare "props"
  hero: Hero | undefined;

  constructor(
    // Holds information about the router to this instace of HeroDetailComponent
    private route: ActivatedRoute,
    private heroService: HeroService,
    // Service for interacting with the browser, like navigating
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  save(): void {
    if (!this.hero) return;
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }
}
