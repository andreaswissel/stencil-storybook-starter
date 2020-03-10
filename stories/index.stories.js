import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const MyComponent = () => {
  const firstName = text('First name', 'Stencil');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Starter');
  return `<my-component first="${firstName}" middle="${middleName}" last="${lastName}"></my-component>`;
};
