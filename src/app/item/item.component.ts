import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {
  @Input() character;
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onAssign(side) {
    // this.character.side = side;
    this.sideAssigned.emit({ name: this.character.name, side: side });
  }
}
