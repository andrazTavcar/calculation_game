import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

import { ResultsComponent } from './results.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldHarness} from "@angular/material/form-field/testing";
import {MatInputHarness} from "@angular/material/input/testing";
import {HarnessLoader} from "@angular/cdk/testing";
import {MatListHarness, MatListItemHarness} from "@angular/material/list/testing";

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsComponent, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two list items',  async () => {
    component.history = [{equation: "5 + 5 =", valid: true, userInput: 10}, {equation: "4 + 5 =", valid: false, userInput: 22}]
    fixture.detectChanges();

    const listHarness = await loader.getHarness(MatListHarness);
    const item = (await listHarness.getItems()) as MatListItemHarness[];

    expect(item.length).toEqual(2);
  });

  it('first item should contain text',  async () => {
    component.history = [{equation: "5 + 5 =", valid: true, userInput: 10}, {equation: "4 + 5 =", valid: false, userInput: 22}]
    fixture.detectChanges();

    const listHarness = await loader.getHarness(MatListHarness);
    const item = (await listHarness.getItems()) as MatListItemHarness[];

    expect(await item[0].getFullText()).toContain("5 + 5 = 10");
  });
});
