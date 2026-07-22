import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "@xron-ui/react";

const meta = {
  title: "Components/Avatar",

  component: Avatar,

  tags: ["autodocs"],

  args: {
    name: "John Doe",
    src: "https://i.pravatar.cc/150?img=12",
  },

  argTypes: {
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      control: "boolean",
    },

    loading: {
      control: "boolean",
    },

    src: {
      control: "text",
    },

    name: {
      control: "text",
    },

    alt: {
      control: "text",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Image: Story = {};

export const Initials: Story = {
  args: {
    src: undefined,
    name: "John Doe",
  },
};

export const FallbackIcon: Story = {
  args: {
    src: undefined,
    name: undefined,
  },
};

export const BrokenImage: Story = {
  args: {
    src: "https://example.com/not-found.jpg",
    name: "John Doe",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    src: undefined,
    name: "John Doe",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" name="John Doe" />

      <Avatar size="sm" name="John Doe" />

      <Avatar size="md" name="John Doe" />

      <Avatar size="lg" name="John Doe" />

      <Avatar size="xl" name="John Doe" />
    </div>
  ),
};

export const ImageSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" src="https://i.pravatar.cc/150?img=12" />

      <Avatar size="sm" src="https://i.pravatar.cc/150?img=12" />

      <Avatar size="md" src="https://i.pravatar.cc/150?img=12" />

      <Avatar size="lg" src="https://i.pravatar.cc/150?img=12" />

      <Avatar size="xl" src="https://i.pravatar.cc/150?img=12" />
    </div>
  ),
};
