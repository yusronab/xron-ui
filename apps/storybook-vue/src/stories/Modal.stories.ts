import { ref } from "vue";

import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Button, Modal } from "@xron-ui/vue";

const meta = {
  title: "Components/Modal",

  component: Modal,

  args: {
    size: "md",
    closeOnEscape: true,
    closeOnOverlayClick: true,
  },

  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg", "xl", "full"],
    },

    closeOnEscape: {
      control: "boolean",
    },

    closeOnOverlayClick: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Button,
      Modal,
    },

    setup() {
      const open = ref(false);

      return {
        args,
        open,
      };
    },

    template: `
<Button @click="open = true">
  Open Modal
</Button>

<Modal
  v-bind="args"
  v-model="open"
>
  <div class="space-y-4">
    <h2 class="text-xl font-semibold">
      Modal Title
    </h2>

    <p>
      This is a simple modal example.
    </p>

    <div class="flex justify-end">
      <Button @click="open = false">
        Close
      </Button>
    </div>
  </div>
</Modal>
`,
  }),
} satisfies Meta<typeof Modal>;

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

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
};

export const Full: Story = {
  args: {
    size: "full",
  },
};

export const DisableEscape: Story = {
  args: {
    closeOnEscape: false,
  },
};

export const DisableOverlayClick: Story = {
  args: {
    closeOnOverlayClick: false,
  },
};
