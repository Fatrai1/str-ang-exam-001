import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroService } from '../service/hero.service';
import

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
heroList: Observable<Hero[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
