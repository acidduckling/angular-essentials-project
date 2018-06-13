import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styles: []
})
export class TabsComponent {
  characters = [{ name: 'Luke Skywalker', side: 'light' }, { name: 'Darth Vader', side: 'dark' }];
  chosenList = 'all';

  getCharacters() {
    if (this.chosenList === 'all') return this.characters.slice();
    return this.characters.filter(char => char.side === this.chosenList);
  }

  onChoose(side) {
    this.chosenList = side;
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(c => c.name === charInfo.name);
    this.characters[pos].side = charInfo.side;
  }
}
