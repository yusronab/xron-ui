import { ref } from "vue";

import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { FormControl, Select } from "@xron-ui/vue";

const options = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Orange",
  },
  {
    id: 3,
    name: "Banana",
  },
];

const meta = {
  title: "Components/Select",

  component: Select,

  args: {
    options,
    labelKey: "name",
    valueKey: "id",
    placeholder: "Select fruit",
  },

  argTypes: {
    size: {
      control: "radio",
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

    loading: {
      control: "boolean",
    },

    clearable: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Select,
    },

    setup() {
      const value = ref<string | number | null>(null);

      return {
        args,
        value,
      };
    },

    template: `
      <Select
        v-bind="args"
        v-model="value"
      />
    `,
  }),
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithValue: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Select,
    },

    setup() {
      const value = ref(2);

      return {
        args,
        value,
      };
    },

    template: `
      <Select
        v-bind="args"
        v-model="value"
      />
    `,
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    options: [],
  },
};

export const ErrorVariant: Story = {
  args: {
    error: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
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

export const Clearable: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Select,
    },

    setup() {
      const value = ref(2);

      return {
        args,
        value,
      };
    },

    template: `
      <Select
        v-bind="args"
        clearable
        v-model="value"
      />
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithFormControl: Story = {
  render: (args: Story["args"]) => ({
    components: {
      FormControl,
      Select,
    },

    setup() {
      const value = ref<string | number | undefined>(undefined);

      return {
        args,
        value,
      };
    },

    template: `
      <FormControl
        label="Country"
        helperText="Select your country."
      >
        <Select
          v-bind="args"
          v-model="value"
        />
      </FormControl>
    `,
  }),
};
