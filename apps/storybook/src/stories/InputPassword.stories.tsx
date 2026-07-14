import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputPassword } from "@xron-ui/react";

const meta = {
  title: "Components/InputPassword",
  component: InputPassword,
  tags: ["autodocs"],

  args: {
    placeholder: "Enter your password",
    defaultValue: "password123",
    disabled: false,
    error: false,
    rounded: false,
    size: "md",
  },

  argTypes: {
    placeholder: {
      control: "text",
    },

    defaultValue: {
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
  },
} satisfies Meta<typeof InputPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-6">
      <div className="space-y-2">
        <h3 className="font-semibold">States</h3>

        <InputPassword defaultValue="password123" placeholder="Default" />

        <InputPassword defaultValue="password123" placeholder="Error" error />

        <InputPassword
          defaultValue="password123"
          placeholder="Disabled"
          disabled
        />

        <InputPassword
          defaultValue="password123"
          placeholder="Read only"
          readOnly
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Sizes</h3>

        <InputPassword size="sm" defaultValue="password123" />

        <InputPassword size="md" defaultValue="password123" />

        <InputPassword size="lg" defaultValue="password123" />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Rounded</h3>

        <InputPassword rounded defaultValue="password123" />
      </div>
    </div>
  ),
};

export const Default: Story = {};

export const ErrorState: Story = {
  name: "Error",
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};
