import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "@xron-ui/react";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],

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

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h3 className="font-semibold">Sizes</h3>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-sm">Small</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" />
            <span className="text-sm">Medium</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-sm">Large</span>
          </div>
        </div>
      </div>
    </div>
  ),
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
