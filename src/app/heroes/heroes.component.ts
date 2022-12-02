import { Component, OnInit } from '@angular/core';
import {Heroe} from '../heroe'
import { HeroeService } from '../shared/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  
})

export class HeroesComponent implements OnInit {

 

  constructor(public miservicio:HeroeService) { 
    
  }

  ngOnInit(): void {
 
  }

  
}
