import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

import { CustomInputComponent } from './custom-input.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {first} from "rxjs";
import {HarnessLoader} from "@angular/cdk/testing";
import {MatFormFieldHarness} from "@angular/material/form-field/testing";
import {MatInputHarness} from "@angular/material/input/testing";

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputComponent, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the input value',  () => {
    component.onValueChange.pipe(first()).subscribe(value => expect(value).toEqual(12345));
    component.emitValue({target: {value: 12345}})
  });

  it('should have label with text',  async () => {
    component.label = "Enter the result";
    const formField = await loader.getHarness(MatFormFieldHarness);
    const label = await formField.getLabel();
    expect(label).toEqual("Enter the result");
  });

  it('should have set input value',  async () => {
    component.type = "text";
    fixture.detectChanges();

    component.inputValue = "5 + 5 =";

    const formField = await loader.getHarness(MatFormFieldHarness);
    const input = (await formField.getControl()) as MatInputHarness;
    expect( await input.getValue()).toEqual("5 + 5 =");
  });
});
