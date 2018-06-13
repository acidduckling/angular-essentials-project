import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  characters = [];

  constructor(private route: ActivatedRoute, private swService: StarWarsService) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => (this.characters = this.swService.getCharacters(params.side))
    );
  }
}
