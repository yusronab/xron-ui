import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { FormControl, Switch } from "@xron-ui/vue";

const meta = {
  title: "Components/Switch",
  component: Switch,

  args: {
    size: "md",
    error: false,
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
      Switch,
    },

    setup() {
      const value = ref(false);

      return {
        args,
        value,
      };
    },

    template: `
      <Switch
        v-model="value"
        v-bind="args"
      >
        Enable notifications
      </Switch>
    `,
  }),
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      FormControl,
      Switch,
    },

    setup() {
      const email = ref(true);
      const push = ref(false);
      const marketing = ref(true);

      return {
        email,
        push,
        marketing,
      };
    },

    template: `
      <div class="flex flex-col gap-6">

        <FormControl label="Notification Settings">
          <Switch v-model="email">
            Email Notifications
          </Switch>

          <Switch v-model="push">
            Push Notifications
          </Switch>

          <Switch v-model="marketing">
            Marketing Emails
          </Switch>
        </FormControl>

      </div>
    `,
  }),
};

export const Small: Story = {
  render: () => ({
    components: {
      Switch,
    },

    setup() {
      const value = ref(true);

      return { value };
    },

    template: `
      <Switch
        v-model="value"
        size="sm"
      >
        Small
      </Switch>
    `,
  }),
};

export const Medium: Story = {
  render: () => ({
    components: {
      Switch,
    },

    setup() {
      const value = ref(true);

      return { value };
    },

    template: `
      <Switch
        v-model="value"
        size="md"
      >
        Medium
      </Switch>
    `,
  }),
};

export const Large: Story = {
  render: () => ({
    components: {
      Switch,
    },

    setup() {
      const value = ref(true);

      return { value };
    },

    template: `
      <Switch
        v-model="value"
        size="lg"
      >
        Large
      </Switch>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: {
      Switch,
    },

    setup() {
      const value = ref(true);

      return { value };
    },

    template: `
      <Switch
        v-model="value"
        disabled
      >
        Disabled
      </Switch>
    `,
  }),
};

export const ErrorVariant: Story = {
  render: () => ({
    components: {
      FormControl,
      Switch,
    },

    setup() {
      const value = ref(false);

      return { value };
    },

    template: `
      <FormControl
        label="Terms"
        error="You must enable this option."
      >
        <Switch
          v-model="value"
          error
        >
          Accept Terms
        </Switch>
      </FormControl>
    `,
  }),
};
