import { ThrowStmt } from '@angular/compiler';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

// import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../model/hero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name: 'Thor', superPower: 'Mjölnir', address: 'Asgard'},
    {id: 2, name: 'Locky', superPower: 'Prank', address: 'Asgard'},
    {id: 3, name: 'Hulk', superPower: 'Big, and green', address: 'Föld'},
    {id: 4, name: 'Amerika Kapitány', superPower: 'shield', address: 'Föld'},
    {id: 5, name: 'Vasember', superPower: 'Páncélzat', address: 'Föld'},
  ]

  constructor() { }
}

// getAll():
