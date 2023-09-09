import {
  Component,
  ElementRef,
  EventEmitter, Input,
  Output,
  ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input()
  disabled: boolean = false;
  @Input()
  label: string = "";
  @Input()
  autofocus: boolean = false;
  @Input()
  value: string | null = null;
  @Input()
  disableOnChangeEvent: boolean = false;
  @Input()
  type: string = "number";

  @Output()
  onValueChange: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('inputElement') inputEl: ElementRef;


  emitValue(event: any): void {
    if (!this.disableOnChangeEvent) {
      this.onValueChange.emit(event.target.value);
      this.inputEl.nativeElement.value = null;
    }
  }
}
