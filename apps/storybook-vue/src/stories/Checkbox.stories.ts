import { ref, watch } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Checkbox } from "@xron-ui/vue";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,

  args: {
    label: "Remember me",
    modelValue: false,
  },

  argTypes: {
    modelValue: {
      control: "boolean",
    },

    label: {
      control: "text",
    },

    disabled: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    indeterminate: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Checkbox,
    },

    setup() {
      const checked = ref(args.modelValue);

      watch(
        () => args.modelValue,
        (value) => {
          checked.value = value;
        },
      );

      return {
        args,
        checked,
      };
    },

    template: `
      <Checkbox
        v-bind="args"
        v-model="checked"
      >
        {{ args.label }}
      </Checkbox>
    `,
  }),
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      Checkbox,
    },

    setup() {
      const checked = ref(true);
      const unchecked = ref(false);
      const disabled = ref(true);
      const error = ref(false);
      const indeterminate = ref(false);

      return {
        checked,
        unchecked,
        disabled,
        error,
        indeterminate,
      };
    },

    template: `
      <div class="flex flex-col gap-4">

        <Checkbox v-model="unchecked">
          Unchecked
        </Checkbox>

        <Checkbox v-model="checked">
          Checked
        </Checkbox>

        <Checkbox
          v-model="indeterminate"
          indeterminate
        >
          Indeterminate
        </Checkbox>

        <Checkbox
          v-model="disabled"
          disabled
        >
          Disabled
        </Checkbox>

        <Checkbox
          v-model="error"
          error
        >
          Error
        </Checkbox>

      </div>
    `,
  }),
};

export const Checked: Story = {
  args: {
    modelValue: true,
    label: "Checked",
  },
};

export const Unchecked: Story = {
  args: {
    modelValue: false,
    label: "Unchecked",
  },
};

export const Indeterminate: Story = {
  args: {
    modelValue: false,
    indeterminate: true,
    label: "Indeterminate",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
  },
};

export const ErrorVariant: Story = {
  args: {
    error: true,
    label: "Error",
  },
};
