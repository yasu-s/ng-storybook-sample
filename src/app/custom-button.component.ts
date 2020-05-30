import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `<button (click)="onClick()">{{ label }}</button>`,
})
export class CustomButtonComponent {
  /** ラベル */
  @Input() label = 'button';

  /** クリックイベント */
  @Output() btnClick = new EventEmitter<string>();

  onClick(): void {
    this.btnClick.emit(this.label);
  }
}
