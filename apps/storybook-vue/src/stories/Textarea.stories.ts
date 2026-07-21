import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { FormControl, Textarea } from "@xron-ui/vue";

const meta = {
  title: "Components/Textarea",
  component: Textarea,

  args: {
    placeholder: "Type your message...",
    size: "md",
    error: false,
    disabled: false,
  },

  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    error: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Textarea,
    },

    setup() {
      const value = ref("");

      return {
        args,
        value,
      };
    },

    template: `
      <Textarea
        v-model="value"
        v-bind="args"
      />
    `,
  }),
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => ({
    components: {
      Textarea,
    },

    setup() {
      const sm = ref("");
      const md = ref("");
      const lg = ref("");

      return {
        sm,
        md,
        lg,
      };
    },

    template: `
      <div class="space-y-4">
        <Textarea
          v-model="sm"
          size="sm"
          placeholder="Small"
        />

        <Textarea
          v-model="md"
          size="md"
          placeholder="Medium"
        />

        <Textarea
          v-model="lg"
          size="lg"
          placeholder="Large"
        />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: {
      Textarea,
    },

    setup() {
      const value = ref("Disabled textarea");

      return { value };
    },

    template: `
      <Textarea
        v-model="value"
        disabled
      />
    `,
  }),
};

export const ErrorVariant: Story = {
  render: () => ({
    components: {
      FormControl,
      Textarea,
    },

    setup() {
      const value = ref("");

      return { value };
    },

    template: `
      <FormControl
        label="Description"
        error="Description is required."
      >
        <Textarea
          v-model="value"
          error
          placeholder="Enter description..."
        />
      </FormControl>
    `,
  }),
};
