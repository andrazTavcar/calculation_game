import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {CustomInputComponent} from "../../components/custom-input/custom-input.component";
import {ResultsComponent} from "../../components/results/results.component";
import {GameContainerComponent} from "../../components/game-container/game-container.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, MatCardModule, CustomInputComponent, ResultsComponent, GameContainerComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {


}
