import { ThrowStmt } from '@angular/compiler';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../model/hero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);


  constructor() { }
}

 getAll(): void {
   this.list$.next(this.list),
 };
