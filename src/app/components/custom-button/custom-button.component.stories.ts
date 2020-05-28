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
