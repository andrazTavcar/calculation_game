import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {EquationResult} from "../../../../shared/custom-types";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input()
  history: Array<EquationResult> | null = []
}
