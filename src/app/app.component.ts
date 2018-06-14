import { Component, OnInit, OnDestroy } from '@angular/core';
import { StarWarsService } from './star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private swService: StarWarsService) {}

  ngOnInit() {
    this.swService.fetchCharacters();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
