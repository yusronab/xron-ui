import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@xron-ui/react";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],

  args: {
    placeholder: "Enter your text...",
    disabled: false,
    error: false,
    rounded: false,
    size: "md",
  },

  argTypes: {
    placeholder: {
      control: "text",
    },

    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    readOnly: {
      control: "boolean",
    },

    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "url"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-6">
      <div className="space-y-2">
        <h3 className="font-semibold">States</h3>

        <Input placeholder="Default" />

        <Input placeholder="Error" error />

        <Input placeholder="Disabled" disabled />

        <Input placeholder="Read only" readOnly value="Read only value" />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Sizes</h3>

        <Input size="sm" placeholder="Small" />

        <Input size="md" placeholder="Medium" />

        <Input size="lg" placeholder="Large" />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Rounded</h3>

        <Input rounded placeholder="Rounded input" />
      </div>
    </div>
  ),
};

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Type your name...",
  },
};

export const ErrorState: Story = {
  name: "Error",
  args: {
    placeholder: "Invalid input",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: "Read only value",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small input",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium input",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large input",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    placeholder: "Rounded input",
  },
};
