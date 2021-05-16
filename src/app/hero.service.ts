import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: heroes are fetched');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero: Hero = HEROES.find(h => h.id === id)
    this.messageService.add(`HeroService: fetched hero id= ${id}`);
    return of(hero);
  }
}
