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

export const Primary = () => ({
  template: '<button mat-button color="primary">Basic</button>',
});

export const RaisedBasic = () => ({
  template: '<button mat-raised-button>Basic</button>',
});

export const RaisedPrimary = () => ({
  template: '<button mat-raised-button color="primary">Basic</button>',
});

export const StrokedBasic = () => ({
  template: '<button mat-stroked-button>Basic</button>',
});

export const StrokedPrimary = () => ({
  template: '<button mat-stroked-button color="primary">Basic</button>',
});

export const FlatBasic = () => ({
  template: '<button mat-flat-button>Basic</button>',
});

export const FlatPrimary = () => ({
  template: '<button mat-flat-button color="primary">Basic</button>',
});
