import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent {
  @Input() characters;
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onSideAssigned(charInfo) {
    this.sideAssigned.emit(charInfo);
  }
}
