import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StarWarsService {
  private characters = [{ name: 'Luke Skywalker', side: 'light' }, { name: 'Darth Vader', side: 'dark' }];

  constructor(private logService: LogService) {}

  getCharacters(chosenList) {
    if (chosenList === 'all') return this.characters.slice();
    return this.characters.filter(char => char.side === chosenList);
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(c => c.name === charInfo.name);
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }
}
