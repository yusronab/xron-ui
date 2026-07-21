import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Spinner } from "@xron-ui/vue";

const meta = {
  title: "Components/Spinner",
  component: Spinner,

  args: {
    size: "md",
  },

  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

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
