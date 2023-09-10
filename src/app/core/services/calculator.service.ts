import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Equation, EquationResult, MathOperationFunc, Operation} from "../../shared/custom-types";

@Injectable({
  providedIn: "root"
})
export class CalculatorService {
  constructor() {
  }

  private operators: Array<Operation> = new Array<Operation>("*", "/", "+", "-");
  private mathFunctionsMap: Map<Operation, MathOperationFunc> = new Map([
      ['*', (a: number, b: number) => a * b],
      ['/', (a: number, b: number) => Math.floor(a / b)],
      ['+', (a: number, b: number) => a + b],
      ['-', (a: number, b: number) => a - b],
    ]
  )

  private history: Array<EquationResult> = [];
  private equationSubject = new BehaviorSubject<Equation | null>(null);
  equation$ = this.equationSubject.asObservable();
  private historySubject = new BehaviorSubject<Array<EquationResult>>(this.history);
  history$ = this.historySubject.asObservable();


  private generateRandomWholeNumber(maxNumber?: number): number {
    // Generates whole number between 0 and maxNumber, default is 20
    const max = maxNumber != null ? maxNumber + 1 : 21;
    return Math.floor(Math.random() * max);
  }

  generateRandomEquation(): void {
    const a = this.generateRandomWholeNumber();
    const b = this.generateRandomWholeNumber();
    // used to access random math operation from operators array
    const index = this.generateRandomWholeNumber(3);
    // based on generated index we get the function to execute the operation and calculate the result that user must insert
    const result = this.mathFunctionsMap.get(this.operators[index])!(a, b);

    const data = {
      equation: `${a} ${this.operators[index]} ${b} =`,
      result
    }

    this.equationSubject.next(data)
  }

  validateAndGenerateNewEquation(data: Equation, userInput: number): void {
    const valid = +userInput === data.result;

    // We push data to the beginning of the array so that user se the latest equation result on top(beginning) of the list
    this.history.unshift({
      equation: data.equation, userInput, valid
    })
    this.historySubject.next(this.history);
    this.generateRandomEquation();
  }
}
