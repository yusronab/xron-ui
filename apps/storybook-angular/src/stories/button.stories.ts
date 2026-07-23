import type { Meta, StoryObj } from '@storybook/angular-vite';

import { Button } from '@xron-ui/angular';

const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    imports: [Button],
    template: `
      <xr-button
        [variant]="variant"
        [appearance]="appearance"
        [size]="size"
        [rounded]="rounded"
        [fullWidth]="fullWidth"
        [loading]="loading"
        [disabled]="disabled"
      >
        Save
      </xr-button>
    `,
  }),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    appearance: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'primary',
    appearance: 'solid',
    size: 'md',
    rounded: false,
    fullWidth: false,
    loading: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<Button>;

export const Showcase: Story = {
  render: () => ({
    template: `
      <div class="space-y-8">

        <div>
          <h3 class="mb-4 text-lg font-semibold">Solid</h3>

          <div class="flex flex-wrap gap-3">
            <xr-button variant="primary">Primary</xr-button>
            <xr-button variant="secondary">Secondary</xr-button>
            <xr-button variant="success">Success</xr-button>
            <xr-button variant="warning">Warning</xr-button>
            <xr-button variant="error">Error</xr-button>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">Outline</h3>

          <div class="flex flex-wrap gap-3">
            <xr-button variant="primary" appearance="outline">Primary</xr-button>
            <xr-button variant="secondary" appearance="outline">Secondary</xr-button>
            <xr-button variant="success" appearance="outline">Success</xr-button>
            <xr-button variant="warning" appearance="outline">Warning</xr-button>
            <xr-button variant="error" appearance="outline">Error</xr-button>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">Ghost</h3>

          <div class="flex flex-wrap gap-3">
            <xr-button variant="primary" appearance="ghost">Primary</xr-button>
            <xr-button variant="secondary" appearance="ghost">Secondary</xr-button>
            <xr-button variant="success" appearance="ghost">Success</xr-button>
            <xr-button variant="warning" appearance="ghost">Warning</xr-button>
            <xr-button variant="error" appearance="ghost">Error</xr-button>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">Sizes</h3>

          <div class="flex items-center gap-3">
            <xr-button size="sm">Small</xr-button>
            <xr-button size="md">Medium</xr-button>
            <xr-button size="lg">Large</xr-button>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">Rounded</h3>

          <div class="flex gap-3">
            <xr-button rounded>Primary</xr-button>
            <xr-button rounded variant="success">Success</xr-button>
            <xr-button rounded variant="error">Error</xr-button>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">States</h3>

          <div class="flex gap-3">
            <xr-button loading>Loading</xr-button>
            <xr-button disabled>Disabled</xr-button>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">Full Width</h3>

          <xr-button fullWidth>
            Full Width Button
          </xr-button>
        </div>

      </div>
    `,
  }),
};

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const ErrorVariant: Story = {
  args: {
    variant: 'error',
  },
};

export const Outline: Story = {
  args: {
    appearance: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    appearance: 'ghost',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
