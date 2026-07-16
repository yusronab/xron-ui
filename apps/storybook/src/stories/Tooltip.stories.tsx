import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Tooltip } from "@xron-ui/react";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],

  args: {
    children: <Button>Hover Me</Button>,
    content: "Tooltip",
    position: "bottom-center",
    size: "md",
    arrow: true,
    delay: 200,
    disabled: false,
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
      control: false,
    },

    content: {
      control: "text",
    },

    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
        "left",
        "right",
      ],
    },

    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },

    arrow: {
      control: "boolean",
    },

    delay: {
      control: {
        type: "number",
      },
    },

    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Positions: Story = {
  render: () => {
    const positions = [
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
      "left",
      "right",
    ] as const;

    return (
      <div className="grid grid-cols-2 gap-6 p-8">
        {positions.map((position) => (
          <div key={position} className="flex justify-center py-8">
            <Tooltip position={position} content={position}>
              <Button>{position}</Button>
            </Tooltip>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6">
      <Tooltip size="sm" content="Small tooltip">
        <Button>Small</Button>
      </Tooltip>

      <Tooltip size="md" content="Medium tooltip">
        <Button>Medium</Button>
      </Tooltip>

      <Tooltip size="lg" content="Large tooltip">
        <Button>Large</Button>
      </Tooltip>
    </div>
  ),
};

export const Arrow: Story = {
  render: () => (
    <div className="flex gap-6">
      <Tooltip content="Arrow" arrow>
        <Button>Arrow</Button>
      </Tooltip>

      <Tooltip content="No Arrow" arrow={false}>
        <Button>No Arrow</Button>
      </Tooltip>
    </div>
  ),
};

export const Delay: Story = {
  render: () => (
    <div className="flex gap-6">
      <Tooltip delay={0} content="0 ms">
        <Button>0 ms</Button>
      </Tooltip>

      <Tooltip delay={500} content="500 ms">
        <Button>500 ms</Button>
      </Tooltip>

      <Tooltip delay={1000} content="1000 ms">
        <Button>1000 ms</Button>
      </Tooltip>
    </div>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <div className="space-y-1">
          <div className="font-semibold">Delete Item</div>

          <div className="text-xs opacity-80">
            This action cannot be undone.
          </div>
        </div>
      }
    >
      <Button>Hover Me</Button>
    </Tooltip>
  ),
};
