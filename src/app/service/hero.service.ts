import { Injectable } from '@angular/core';

import { Hero } from '../model/hero'

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  list: Hero[] = [
    {
      "id": 1,
      "name": "Thor",
      "superPower": "Mjölnir",
      "address": "Asgard"
    },
    {
      "id": 2,
      "name": "Loki",
      "superPower": "prank",
      "address": "Asgard"
    },
    {
      "id": 3,
      "name": "Groot",
      "superPower": "tree",
      "address": "universum"
    },
    {
      "id": 4,
      "name": "Amerika kapitány",
      "superPower": "shild",
      "address": "Föld"
    },
    {
      "id": 5,
      "name": "Vasember",
      "superPower": "vas",
      "address": "Föld"
    },
  ];


  constructor() { }


 getAll(): Hero[]{
  return (this.list.filter(item => item));
 }

 }
