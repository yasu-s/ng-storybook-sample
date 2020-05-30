import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'MatButton',
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
};

export const Basic = () => ({
  template: '<button mat-button>Basic</button>',
});
