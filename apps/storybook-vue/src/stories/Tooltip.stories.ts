import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Button, Tooltip } from "@xron-ui/vue";

const meta = {
  title: "Components/Tooltip",

  component: Tooltip,

  args: {
    content: "Save changes",
    position: "bottom-center",
    size: "md",
    delay: 200,
    offset: 8,
    arrow: true,
    disabled: false,
  },

  argTypes: {
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
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    delay: {
      control: "number",
    },

    offset: {
      control: "number",
    },

    arrow: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Tooltip,
      Button,
    },

    setup() {
      return {
        args,
      };
    },

    template: `
      <div
        style="
          display:flex;
          justify-content:center;
          align-items:center;
          height:220px;
        "
      >
        <Tooltip v-bind="args">
          <Button>
            Hover me
          </Button>
        </Tooltip>
      </div>
    `,
  }),
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Top: Story = {
  args: {
    position: "top-center",
  },
};

export const Bottom: Story = {
  args: {
    position: "bottom-center",
  },
};

export const Left: Story = {
  args: {
    position: "left",
  },
};

export const Right: Story = {
  args: {
    position: "right",
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

export const WithoutArrow: Story = {
  args: {
    arrow: false,
  },
};

export const Delay: Story = {
  args: {
    delay: 1000,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AllPositions: Story = {
  render: () => ({
    components: {
      Tooltip,
      Button,
    },

    template: `
      <div
        style="
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:24px;
          padding:48px;
          place-items:center;
        "
      >
        <Tooltip content="Top Left" position="top-left">
          <Button>Top Left</Button>
        </Tooltip>

        <Tooltip content="Top Center" position="top-center">
          <Button>Top Center</Button>
        </Tooltip>

        <Tooltip content="Top Right" position="top-right">
          <Button>Top Right</Button>
        </Tooltip>

        <Tooltip content="Left" position="left">
          <Button>Left</Button>
        </Tooltip>

        <Tooltip content="Right" position="right">
          <Button>Right</Button>
        </Tooltip>

        <Tooltip content="Bottom Left" position="bottom-left">
          <Button>Bottom Left</Button>
        </Tooltip>

        <Tooltip content="Bottom Center" position="bottom-center">
          <Button>Bottom Center</Button>
        </Tooltip>

        <Tooltip content="Bottom Right" position="bottom-right">
          <Button>Bottom Right</Button>
        </Tooltip>
      </div>
    `,
  }),
};
