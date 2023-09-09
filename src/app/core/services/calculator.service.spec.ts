import {TestBed} from '@angular/core/testing';

import {CalculatorService} from './calculator.service';
import {filter, take} from "rxjs";

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate random number less or equals than 20', () => {
    for (let i = 0; i < 10; i++) {
      let number = service['generateRandomWholeNumber'](20);
      expect(number).toBeLessThanOrEqual(20);
    }
  });

  it('should emit generated equation', () => {
    service.generateRandomEquation();
    service.equation$.subscribe((value) => expect(value).toBeTruthy())
  });

  it('should add equation to history array', () => {
    service.validateAndGenerateNewEquation({equation: "5 + 5 =", result: 10}, 10);
    service.history$.subscribe((value) => expect(!!value.length).toBeTruthy())
  });
});
