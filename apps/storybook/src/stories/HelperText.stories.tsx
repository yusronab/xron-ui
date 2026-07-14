import type { Meta, StoryObj } from "@storybook/react-vite";

import { HelperText } from "@xron-ui/react";

const meta = {
  title: "Components/HelperText",
  component: HelperText,
  tags: ["autodocs"],

  args: {
    children: "This is helper text.",
    error: false,
  },

  argTypes: {
    children: {
      control: "text",
    },

    error: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof HelperText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <HelperText>This is a helper text.</HelperText>

      <HelperText error>This field is required.</HelperText>
    </div>
  ),
};

export const Default: Story = {
  args: {
    children: "This is helper text.",
  },
};

export const Error: Story = {
  args: {
    children: "This field is required.",
    error: true,
  },
};
