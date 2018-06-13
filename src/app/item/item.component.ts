import { Component, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {
  @Input() character;

  constructor(private swService: StarWarsService) {}

  onAssign(side) {
    // this.character.side = side;
    // this.sideAssigned.emit({ name: this.character.name, side: side });
    this.swService.onSideChosen({name: this.character.name, side: side});
  }
}
