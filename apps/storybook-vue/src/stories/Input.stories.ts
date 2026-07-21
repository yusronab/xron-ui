import { ref, watch } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { FormControl, Input } from "@xron-ui/vue";

const meta = {
  title: "Components/Input",
  component: Input,

  args: {
    modelValue: "",
    placeholder: "Enter text...",
  },

  argTypes: {
    modelValue: {
      control: "text",
    },

    placeholder: {
      control: "text",
    },

    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
  },

  render: (args) => ({
    components: {
      Input,
    },

    setup() {
      const value = ref(args.modelValue);

      watch(
        () => args.modelValue,
        (v) => {
          value.value = v;
        },
      );

      return {
        args,
        value,
      };
    },

    template: `
      <div class="w-80">
        <Input
          v-bind="args"
          v-model="value"
        />
      </div>
    `,
  }),
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      Input,
    },

    setup() {
      const value = ref("");

      return {
        value,
      };
    },

    template: `
      <div class="flex w-80 flex-col gap-4">

        <Input
          v-model="value"
          placeholder="Default"
        />

        <Input
          v-model="value"
          size="sm"
          placeholder="Small"
        />

        <Input
          v-model="value"
          size="md"
          placeholder="Medium"
        />

        <Input
          v-model="value"
          size="lg"
          placeholder="Large"
        />

        <Input
          v-model="value"
          rounded
          placeholder="Rounded"
        />

        <Input
          v-model="value"
          error
          placeholder="Error"
        />

        <Input
          v-model="value"
          disabled
          placeholder="Disabled"
        />

      </div>
    `,
  }),
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    placeholder: "Rounded",
  },
};

export const ErrorVariant: Story = {
  args: {
    error: true,
    placeholder: "Error",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};

export const WithFormControl: Story = {
  render: () => ({
    components: {
      FormControl,
      Input,
    },

    setup() {
      const email = ref("");

      return {
        email,
      };
    },

    template: `
      <FormControl
        label="Email"
        helperText="We'll never share your email address."
      >
        <Input
          v-model="email"
          type="email"
          placeholder="Enter your email"
        />
      </FormControl>
    `,
  }),
};
