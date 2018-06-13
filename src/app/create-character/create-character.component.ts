import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ];
  defaultName = 'Obi-Wan';

  constructor(private swService: StarWarsService) {}

  onSubmit(submittedForm) {
    if (submittedForm.invalid) return;

    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
