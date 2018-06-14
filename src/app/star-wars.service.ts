import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' }
  ];
  charactersChanged = new Subject<void>();

  constructor(private logService: LogService, private http: HttpClient) {}

  getCharacters(chosenList) {
    if (chosenList === 'all') return this.characters.slice();
    return this.characters.filter(char => char.side === chosenList);
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(c => c.name === charInfo.name);
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }

  fetchCharacters() {
    this.http
      .get('https://swapi.co/api/people/')
      .pipe(
        map((response: any) => {
          return response.results.map(char => ({ name: char.name, side: '' }));
        })
      )
      .subscribe(data => {
        console.log(data);
        this.characters = data;
        this.charactersChanged.next();
      });
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex(c => c.name === name);
    if (pos !== -1) return;

    const newChar = { name, side };
    this.characters.push(newChar);
  }
}
