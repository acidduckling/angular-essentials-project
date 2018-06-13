import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styles: []
})
export class TabsComponent {
  characters = [];
  chosenList = 'all';

  constructor(private swService: StarWarsService) {}

  getCharacters() {
    return this.swService.getCharacters(this.chosenList);
  }

  onChoose(side) {
    this.chosenList = side;
  }
}
