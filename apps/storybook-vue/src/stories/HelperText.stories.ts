import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { HelperText } from "@xron-ui/vue";

const meta = {
  title: "Components/HelperText",
  component: HelperText,

  args: {
    text: "This is helper text.",
  },

  argTypes: {
    error: {
      control: "boolean",
    },

    text: {
      control: "text",
    },
  },

  render: (args) => ({
    components: {
      HelperText,
    },

    setup() {
      return {
        args,
      };
    },

    template: `
      <HelperText
        :error="args.error"
      >
        {{ args.text }}
      </HelperText>
    `,
  }),
} satisfies Meta<typeof HelperText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      HelperText,
    },

    template: `
      <div class="flex flex-col gap-3">
        <HelperText>
          This is helper text.
        </HelperText>

        <HelperText error>
          This field is required.
        </HelperText>
      </div>
    `,
  }),
};

export const Default: Story = {
  args: {
    text: "This is helper text.",
  },
};

export const ErrorVariant: Story = {
  args: {
    error: true,
    text: "This field is required.",
  },
};
