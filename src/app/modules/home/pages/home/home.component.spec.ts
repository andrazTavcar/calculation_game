import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

import { HomeComponent } from './home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";
import {HarnessLoader} from "@angular/cdk/testing";
import {MatCardHarness} from "@angular/material/card/testing";
import {By} from "@angular/platform-browser";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent, BrowserAnimationsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Card should contain title', async () => {
    const cardHarness = await loader.getHarness(MatCardHarness);

    expect(await cardHarness.getTitleText()).toContain("Welcome to calculation game");
  });

  it('Button element should exist and have routerLink attribute', async () => {
    const button = fixture.debugElement.query(By.css('.button'));
    expect(button).toBeTruthy();

    const attribute = button.attributes['routerLink'];
    expect(attribute).toBeTruthy();
  });
});
