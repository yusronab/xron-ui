import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input, Label } from "@xron-ui/react";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],

  args: {
    htmlFor: "example-input",
    children: "Email Address",
  },

  argTypes: {
    htmlFor: {
      control: "text",
    },

    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>

        <Input id="email" placeholder="Enter your email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>

        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  ),
};

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    children: "Username",
    htmlFor: "username",
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "Required Field",
    htmlFor: "required",
    className: "text-red-600",
  },
};
