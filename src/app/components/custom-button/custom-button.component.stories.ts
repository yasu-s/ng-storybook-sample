import { action } from '@storybook/addon-actions';

import { withKnobs, text } from '@storybook/addon-knobs';

import { CustomButtonComponent } from './custom-button.component';

export default {
  title: 'Custom/buttons',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
  },
};

export const CustomButton = () => ({
  component: CustomButtonComponent,
  props: {
    label: 'hoge',
  },
});

export const CustomButton2 = () => ({
  component: CustomButtonComponent,
  props: {
    label: 'hoge2',
    btnClick: action('btnClick'),
  },
});

export const CustomButton3 = () => ({
  component: CustomButtonComponent,
  props: {
    label: text('label', 'hoge3'),
  },
});
