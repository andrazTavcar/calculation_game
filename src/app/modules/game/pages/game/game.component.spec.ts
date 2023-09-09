import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

import {GameComponent} from './game.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HarnessLoader} from "@angular/cdk/testing";
import {MatCardHarness} from "@angular/material/card/testing";

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComponent, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Card should contain title', async () => {
    const cardHarness = await loader.getHarness(MatCardHarness);

    expect(await cardHarness.getTitleText()).toContain("Solve the equations");
  });

  it('Card should contain subtitle', async () => {
    const cardHarness = await loader.getHarness(MatCardHarness);

    expect(await cardHarness.getSubtitleText()).toContain("Use only the whole part of the solution without decimals");
  });
});
