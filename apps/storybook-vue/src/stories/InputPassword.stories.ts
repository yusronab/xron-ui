import { ref, watch } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { InputPassword } from "@xron-ui/vue";

const meta = {
  title: "Components/InputPassword",
  component: InputPassword,

  args: {
    modelValue: "",
    placeholder: "Enter your password",
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
  },

  render: (args) => ({
    components: {
      InputPassword,
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
        <InputPassword
          v-bind="args"
          v-model="value"
        />
      </div>
    `,
  }),
} satisfies Meta<typeof InputPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      InputPassword,
    },

    setup() {
      const value = ref("");

      return {
        value,
      };
    },

    template: `
      <div class="flex w-80 flex-col gap-4">

        <InputPassword
          v-model="value"
          placeholder="Default"
        />

        <InputPassword
          v-model="value"
          size="sm"
          placeholder="Small"
        />

        <InputPassword
          v-model="value"
          size="md"
          placeholder="Medium"
        />

        <InputPassword
          v-model="value"
          size="lg"
          placeholder="Large"
        />

        <InputPassword
          v-model="value"
          rounded
          placeholder="Rounded"
        />

        <InputPassword
          v-model="value"
          error
          placeholder="Error"
        />

        <InputPassword
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

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const ErrorVariant: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
