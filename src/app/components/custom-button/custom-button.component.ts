import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent {
  @Input() label = 'button';
  @Output() btnClick = new EventEmitter();

  onClick(): void {
    this.btnClick.emit();
  }
}
