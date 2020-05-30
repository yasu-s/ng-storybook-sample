import { action } from '@storybook/addon-actions';

import { CustomButtonComponent } from './custom-button.component';

export default {
  title: 'CustomButton',
  component: CustomButtonComponent,
  parameters: { docs: { iframeHeight: 120 } },
};

export const Basic = (args: any) => ({
  component: CustomButtonComponent,
  props: args,
});
Basic.args = { label: 'hoge', onClick: action('hoge') };
