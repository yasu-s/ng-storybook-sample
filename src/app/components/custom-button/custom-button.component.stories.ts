import { action } from '@storybook/addon-actions';

import { CustomButtonComponent } from './custom-button.component';

export default {
  title: 'Custom/buttons',
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
