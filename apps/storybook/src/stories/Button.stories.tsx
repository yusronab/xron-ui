import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@xron-ui/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  args: {
    children: "Button",
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "outline",
        "ghost",
      ],
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
} satisfies Meta<typeof Button>;

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

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const ErrorVariant: Story = {
  name: "Error",
  args: {
    variant: "error",
    children: "Error",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
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

export const Rounded: Story = {
  args: {
    rounded: true,
    children: "Rounded",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};
