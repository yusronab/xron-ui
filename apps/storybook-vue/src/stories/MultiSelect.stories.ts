import { ref } from "vue";

import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { FormControl, MultiSelect } from "@xron-ui/vue";

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

type Value = Array<string | number>;

const meta = {
  title: "Components/MultiSelect",

  component: MultiSelect,

  args: {
    options,
    labelKey: "name",
    valueKey: "id",
    placeholder: "Select fruits",
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
  },

  render: (args) => ({
    components: {
      MultiSelect,
    },

    setup() {
      const value = ref<Value>([]);

      return {
        args,
        value,
      };
    },

    template: `
      <MultiSelect
        v-bind="args"
        v-model="value"
      />
    `,
  }),
} satisfies Meta<typeof MultiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithValue: Story = {
  render: (args: Story["args"]) => ({
    components: {
      MultiSelect,
    },

    setup() {
      const value = ref<Value>([1, 3]);

      return {
        args,
        value,
      };
    },

    template: `
      <MultiSelect
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomOption: Story = {
  render: (args: Story["args"]) => ({
    components: {
      MultiSelect,
    },

    setup() {
      const value = ref<Value>([]);

      return {
        args,
        value,
      };
    },

    template: `
      <MultiSelect
        v-bind="args"
        v-model="value"
      >
        <template #option="{ option }">
          🍎 {{ option.name }}
        </template>
      </MultiSelect>
    `,
  }),
};

export const CustomValue: Story = {
  render: (args: Story["args"]) => ({
    components: {
      MultiSelect,
    },

    setup() {
      const value = ref<Value>([1, 2]);

      return {
        args,
        value,
      };
    },

    template: `
      <MultiSelect
        v-bind="args"
        v-model="value"
      >
        <template #value="{ options }">
          {{ options.length }} selected
        </template>
      </MultiSelect>
    `,
  }),
};

export const WithFormControl: Story = {
  render: (args: Story["args"]) => ({
    components: {
      FormControl,
      MultiSelect,
    },

    setup() {
      const value = ref<Value>([]);

      return {
        args,
        value,
      };
    },

    template: `
      <FormControl
        label="Favorite Fruits"
        helperText="Select one or more fruits."
      >
        <MultiSelect
          v-bind="args"
          v-model="value"
        />
      </FormControl>
    `,
  }),
};
