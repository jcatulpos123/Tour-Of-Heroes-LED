import { HeroService } from './../hero.service';
//libs
import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
//interfaces
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
//Components
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
//Service
//import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent,
    RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  providers: [
    HeroService
  ],
})

export class HeroesComponent {
  selectedHero ?: Hero; //selected hero var
  heroes : Hero[] = []; //create var heroes as instance of Hero object with empty value
  hero ?: Hero
  //heroes : Hero[] = this.heroService.getHeroes(); //--> not advisable

  constructor(
    private heroService : HeroService,
    private messageService  : MessageService
  ) {}

  //hooks
  ngOnInit(): void { //ngOnInit kay ConnectedCallback equivalent sa LWC
    this.getHeroes();

  }

  // //Functions

  // onSelect(hero: Hero): void {
  //   this.selectedHero = this.selectedHero !== hero ? hero : undefined;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  //crud
  add(name : string, universe : string) : void{
    name = name.trim();
    universe = universe.trim();

    if (name) {
      this.heroService.addHero({ name, universe } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    } else {
      return;
    }
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe( hero => {

    });

  }
  //end of crud
}

