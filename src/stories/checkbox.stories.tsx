import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '~/components/ui/input';

const meta = {
  component: Input,
  title: "Form/Checkbox"
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder Text"
  }
};