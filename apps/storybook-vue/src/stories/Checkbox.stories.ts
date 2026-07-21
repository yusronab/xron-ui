import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Checkbox, FormControl } from "@xron-ui/vue";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,

  args: {
    error: false,
    indeterminate: false,
    disabled: false,
  },

  argTypes: {
    error: {
      control: "boolean",
    },

    indeterminate: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Checkbox,
    },

    setup() {
      const checked = ref(false);

      return {
        args,
        checked,
      };
    },

    template: `
      <Checkbox
        v-model="checked"
        v-bind="args"
      >
        Accept terms and conditions
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
      FormControl,
    },

    setup() {
      const read = ref(true);
      const write = ref(false);
      const remove = ref(false);

      return {
        read,
        write,
        remove,
      };
    },

    template: `
      <FormControl
        label="Permissions"
        helper-text="Select one or more permissions."
      >
        <div class="flex flex-col gap-3">
          <Checkbox v-model="read">
            Read
          </Checkbox>

          <Checkbox v-model="write">
            Write
          </Checkbox>

          <Checkbox v-model="remove">
            Delete
          </Checkbox>
        </div>
      </FormControl>
    `,
  }),
};

export const Checked: Story = {
  render: () => ({
    components: {
      Checkbox,
    },

    setup() {
      const checked = ref(true);

      return {
        checked,
      };
    },

    template: `
      <Checkbox v-model="checked">
        Checked
      </Checkbox>
    `,
  }),
};

export const Indeterminate: Story = {
  render: () => ({
    components: {
      Checkbox,
    },

    setup() {
      const checked = ref(false);

      return {
        checked,
      };
    },

    template: `
      <Checkbox
        v-model="checked"
        indeterminate
      >
        Indeterminate
      </Checkbox>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: {
      Checkbox,
    },

    setup() {
      const checked = ref(true);

      return {
        checked,
      };
    },

    template: `
      <Checkbox
        v-model="checked"
        disabled
      >
        Disabled
      </Checkbox>
    `,
  }),
};

export const ErrorVariant: Story = {
  render: () => ({
    components: {
      Checkbox,
      FormControl,
    },

    setup() {
      const checked = ref(false);

      return {
        checked,
      };
    },

    template: `
      <FormControl
        label="Agreement"
        error="You must accept the agreement."
      >
        <Checkbox
          v-model="checked"
          error
        >
          I agree to the terms and conditions.
        </Checkbox>
      </FormControl>
    `,
  }),
};
