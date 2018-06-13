import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styles: []
})
export class TabsComponent implements OnInit {
  characters = [{ name: 'Luke Skywalker', side: '' }, { name: 'Darth Vader', side: '' }];
  chosenList = 'all';

  constructor() {}

  ngOnInit() {}

  getCharacters() {
    if (this.chosenList === 'all') return this.characters.slice();
    return this.characters.filter(char => char.side === this.chosenList);
  }

  onChoose(side) {
    this.chosenList = side;
  }
}
