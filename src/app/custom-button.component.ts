import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `<button>{{ label }}</button>`,
})
export class CustomButtonComponent {
  @Input() label = 'button';
}
