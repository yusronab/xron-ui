import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Button } from "@xron-ui/vue";

const meta = {
  title: "Components/Button",
  component: Button,

  args: {
    label: "Button",
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
    },

    appearance: {
      control: "inline-radio",
      options: ["solid", "outline", "ghost"],
    },

    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "boolean",
    },

    fullWidth: {
      control: "boolean",
    },

    loading: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    onClick: {
      action: "clicked",
    },
  },

  render: (args) => ({
    components: {
      Button,
    },

    setup() {
      return {
        args,
      };
    },

    template: `
      <Button v-bind="args">
        {{ args.label }}
      </Button>
    `,
  }),
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      Button,
    },

    template: `
      <div class="flex flex-wrap gap-3">
        <Button>Primary</Button>

        <Button appearance="outline">
          Primary
        </Button>

        <Button appearance="ghost">
          Primary
        </Button>

        <Button variant="success">
          Success
        </Button>

        <Button
          variant="success"
          appearance="outline"
        >
          Success
        </Button>

        <Button
          variant="success"
          appearance="ghost"
        >
          Success
        </Button>

        <Button variant="error">
          Error
        </Button>

        <Button
          variant="error"
          appearance="outline"
        >
          Error
        </Button>

        <Button
          variant="error"
          appearance="ghost"
        >
          Error
        </Button>
      </div>
    `,
  }),
};

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    label: "Warning",
  },
};

export const ErrorVariant: Story = {
  name: "Error",

  args: {
    variant: "error",
    label: "Error",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    label: "Rounded",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: "Full Width",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: "Loading...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
  },
};
