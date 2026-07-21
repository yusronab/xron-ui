import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Badge } from "@xron-ui/vue";

const meta = {
  title: "Components/Badge",
  component: Badge,

  args: {
    label: "Badge",
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "info"],
    },

    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },

    outline: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Badge,
    },

    setup() {
      return {
        args,
      };
    },

    template: `
      <Badge
        :variant="args.variant"
        :size="args.size"
        :outline="args.outline"
      >
        {{ args.label }}
      </Badge>
    `,
  }),
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      Badge,
    },

    template: `
      <div class="flex flex-col gap-6">

        <div class="flex flex-wrap gap-3">
          <Badge>Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
        </div>

        <div class="flex flex-wrap gap-3">
          <Badge outline>Primary</Badge>
          <Badge variant="secondary" outline>Secondary</Badge>
          <Badge variant="success" outline>Success</Badge>
          <Badge variant="warning" outline>Warning</Badge>
          <Badge variant="danger" outline>Danger</Badge>
          <Badge variant="info" outline>Info</Badge>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>

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

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    label: "Info",
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    label: "Outline",
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
