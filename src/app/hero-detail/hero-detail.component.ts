import { HeroService } from './../hero.service';
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { NgIf, UpperCasePipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'hero-detail',
  standalone: true,
  imports: [UpperCasePipe, NgIf, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  ngOnInit(): void {
    this.getHero();
  }

  @Input() hero ?: Hero;
  updated = false;

  constructor(
    private route : ActivatedRoute,
    private heroService : HeroService,
    private location : Location,
    private messageService : MessageService
  ) {}



  getHero() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack() : void {
    if(this.updated) {
      this.messageService.add(`Updated Name of ID '${this.hero?.id}' to '${this.hero?.name}'`);
    }
    this.location.back();
  }

  save() : void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() =>
        {
          this.updated = true;
          this.goBack();
        }
      );
    }
    this.updated = false;
  }
}
