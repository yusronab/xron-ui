import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "@xron-ui/react";

const meta = {
  title: "Components/Skeleton",

  component: Skeleton,

  tags: ["autodocs"],

  args: {
    width: "100%",
    height: 16,
    lines: 1,
    radius: "md",
    animation: "pulse",
  },

  argTypes: {
    width: {
      control: "text",
    },

    height: {
      control: "number",
    },

    lines: {
      control: {
        type: "number",
        min: 1,
      },
    },

    radius: {
      control: "radio",
      options: ["none", "sm", "md", "lg", "full"],
    },

    animation: {
      control: "radio",
      options: ["none", "pulse", "wave"],
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const SingleLine: Story = {
  args: {
    width: 240,
  },
};

export const MultiLine: Story = {
  args: {
    lines: 4,
    width: "100%",
  },
};

export const Rounded: Story = {
  args: {
    width: 140,
    height: 40,
    radius: "full",
  },
};

export const WaveAnimation: Story = {
  args: {
    width: 240,
    animation: "wave",
  },
};

export const NoAnimation: Story = {
  args: {
    width: 240,
    animation: "none",
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="max-w-sm space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton height={180} radius="lg" />

      <Skeleton width="60%" height={24} />

      <Skeleton lines={3} />
    </div>
  ),
};

export const ProfileSkeleton: Story = {
  render: () => (
    <div className="flex max-w-sm items-center gap-4">
      <Skeleton width={56} height={56} radius="full" />

      <div className="flex-1 space-y-2">
        <Skeleton width="70%" />

        <Skeleton width="45%" />
      </div>
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center gap-4">
          <Skeleton width={40} height={40} radius="full" />

          <Skeleton width="20%" />

          <Skeleton width="40%" />

          <Skeleton width="15%" />
        </div>
      ))}
    </div>
  ),
};
