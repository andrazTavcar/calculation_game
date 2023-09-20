import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomInputComponent} from "../custom-input/custom-input.component";
import {ResultsComponent} from "../results/results.component";
import {Observable, Subject, takeUntil} from "rxjs";
import {CalculatorService} from "../../../../core/services/calculator.service";
import {Equation, EquationResult} from "../../../../shared/custom-types";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";


@Component({
  selector: 'app-game-container',
  standalone: true,
  imports: [CommonModule, CustomInputComponent, ResultsComponent],
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  private calculatorService = inject(CalculatorService);

  equationData: Equation;


  ngOnInit(): void {
    this.calculatorService.generateRandomEquation();

    this.calculatorService.equation$.pipe(
     takeUntilDestroyed())
    .subscribe((data) => {
      if (data != null)
        this.equationData = data;
    })
  }

  onChange(value: number) {
    this.calculatorService.validateAndGenerateNewEquation(this.equationData, value);
  }

  getHistory(): Observable<Array<EquationResult>> {
    return this.calculatorService.history$;
  }
}
