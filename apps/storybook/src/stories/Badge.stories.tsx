import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@xron-ui/react";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],

  args: {
    children: "Badge",
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "ghost",
      ],
    },

    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    outline: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const DangerVariant: Story = {
  name: "Danger",
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Outline: Story = {
  args: {
    variant: "primary",
    outline: true,
    children: "Outline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};
