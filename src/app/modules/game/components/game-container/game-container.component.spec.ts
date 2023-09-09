import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameContainerComponent } from './game-container.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('GameContainerComponent', () => {
  let component: GameContainerComponent;
  let fixture: ComponentFixture<GameContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GameContainerComponent, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(GameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
