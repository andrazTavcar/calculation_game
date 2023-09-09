import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomInputComponent} from "../custom-input/custom-input.component";
import {ResultsComponent} from "../results/results.component";
import {Observable, Subject, takeUntil} from "rxjs";
import {CalculatorService} from "../../../../core/services/calculator.service";
import {Equation, EquationResult} from "../../../../shared/custom-types";


@Component({
  selector: 'app-game-container',
  standalone: true,
  imports: [CommonModule, CustomInputComponent, ResultsComponent],
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit, OnDestroy {
  private calculatorService = inject(CalculatorService);
  private notifier = new Subject()

  equationData: Equation;


  ngOnInit(): void {
    this.calculatorService.generateRandomEquation();

    this.calculatorService.equation$.pipe(
      takeUntil(this.notifier))
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


  ngOnDestroy(): void {
    this.notifier.next(true);
    this.notifier.complete();
  }
}
