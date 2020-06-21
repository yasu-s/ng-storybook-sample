import { setCompodocJson } from '@storybook/addon-docs/angular';

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from './documentation.json';

setCompodocJson(docJson);

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'light', value: '#eeeeee' },
      { name: 'dark', value: '#222222' },
    ],
  },
};
