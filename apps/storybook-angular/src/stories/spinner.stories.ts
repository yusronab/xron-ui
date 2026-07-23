import type { Meta, StoryObj } from '@storybook/angular-vite';

import { Spinner } from '@xron-ui/angular';

const meta: Meta<Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `
      <xr-spinner
        [size]="size"
      />
    `,
  }),
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<Spinner>;

export const Showcase: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-6">
        <xr-spinner size="xs" />
        <xr-spinner size="sm" />
        <xr-spinner size="md" />
        <xr-spinner size="lg" />
        <xr-spinner size="xl" />
      </div>
    `,
  }),
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};
