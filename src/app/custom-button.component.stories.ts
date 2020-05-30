import { CustomButtonComponent } from './custom-button.component';

export default {
  title: 'CustomButton',
  component: CustomButtonComponent,
};

export const Basic = (args: any) => ({
  component: CustomButtonComponent,
  props: args,
});
Basic.args = { label: 'hoge' };
