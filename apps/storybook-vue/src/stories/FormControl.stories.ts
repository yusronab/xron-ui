import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { FormControl, Input, InputPassword, InputFile } from "@xron-ui/vue";

const meta = {
  title: "Components/FormControl",
  component: FormControl,

  args: {
    label: "Email",
    helperText: "We'll never share your email.",
    required: false,
  },

  argTypes: {
    label: {
      control: "text",
    },

    helperText: {
      control: "text",
    },

    error: {
      control: "text",
    },

    required: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      FormControl,
      Input,
    },

    setup() {
      const value = ref("");

      return {
        args,
        value,
      };
    },

    template: `
      <div class="w-80">
        <FormControl v-bind="args">
          <Input v-model="value" />
        </FormControl>
      </div>
    `,
  }),
} satisfies Meta<typeof FormControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      FormControl,
      Input,
      InputPassword,
      InputFile,
    },

    setup() {
      const email = ref("");
      const password = ref("");
      const avatar = ref<File | null>(null);

      return {
        email,
        password,
        avatar,
      };
    },

    template: `
      <div class="flex w-96 flex-col gap-6">

        <FormControl
          label="Email"
          helper-text="We'll never share your email."
        >
          <Input
            v-model="email"
            placeholder="john@example.com"
          />
        </FormControl>

        <FormControl
          label="Password"
          helper-text="Minimum 8 characters."
        >
          <InputPassword
            v-model="password"
          />
        </FormControl>

        <FormControl
          label="Avatar"
          helper-text="PNG or JPG image."
        >
          <InputFile
            v-model="avatar"
            preview
            accept="image/*"
          />
        </FormControl>

        <FormControl
          label="Email"
          error="Email is required."
        >
          <Input
            v-model="email"
            error
          />
        </FormControl>

        <FormControl
          label="Full Name"
          required
        >
          <Input />
        </FormControl>

      </div>
    `,
  }),
};

export const Required: Story = {
  args: {
    label: "Full Name",
    required: true,
  },
};

export const HelperText: Story = {
  args: {
    label: "Email",
    helperText: "We'll never share your email.",
  },
};

export const ErrorVariant: Story = {
  args: {
    label: "Email",
    error: "Email is required.",
  },
};
