import { action } from '@storybook/addon-actions';

import { CustomButtonComponent } from './custom-button.component';

export default {
  title: 'CustomButton',
};

export const Basic = () => ({
  component: CustomButtonComponent,
  props: { btnClick: action('hoge') },
});
