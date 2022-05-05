import { Meta, Story } from '@storybook/react';

import { Button, Props } from './Button';

const meta: Meta = {
  title: 'Components/Elements/Button',
  parameters: {
    controls: { expand: true },
  },
};

export default meta;

const Template: Story<Props> = (props) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
  size: 'md',
};

export const Inverse = Template.bind({});
Inverse.args = {
  children: 'Inverse',
  variant: 'inverse',
  size: 'md',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger',
  size: 'md',
};
