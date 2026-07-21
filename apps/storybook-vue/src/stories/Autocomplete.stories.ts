import { ref } from "vue";

import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Autocomplete, FormControl } from "@xron-ui/vue";

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

type Value = string | number | undefined;

function handleSearch(keyword: string) {
  console.log("Searching:", keyword);
}

const meta = {
  title: "Components/Autocomplete",

  component: Autocomplete,

  args: {
    options,
    labelKey: "name",
    valueKey: "id",
    placeholder: "Search fruit",
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

    debounce: {
      control: "number",
    },
  },

  render: (args) => ({
    components: {
      Autocomplete,
    },

    setup() {
      const value = ref<string | number>();

      return {
        args,
        value,
      };
    },

    template: `
      <Autocomplete
        v-bind="args"
        v-model="value"
      />
    `,
  }),
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithValue: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Autocomplete,
    },

    setup() {
      const value = ref(2);

      return {
        args,
        value,
      };
    },

    template: `
      <Autocomplete
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
      Autocomplete,
    },

    setup() {
      const value = ref(2);

      return {
        args,
        value,
      };
    },

    template: `
      <Autocomplete
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

export const AsyncSearch: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Autocomplete,
    },

    setup() {
      const value = ref<Value>(undefined);

      return {
        args,
        value,
        handleSearch,
      };
    },

    template: `
      <Autocomplete
        v-bind="args"
        v-model="value"
        @search="handleSearch"
      />
    `,
  }),
};

export const CustomOption: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Autocomplete,
    },

    setup() {
      const value = ref<Value>(undefined);

      return {
        args,
        value,
      };
    },

    template: `
      <Autocomplete
        v-bind="args"
        v-model="value"
      >
        <template #option="{ option }">
          🍎 {{ option.name }}
        </template>
      </Autocomplete>
    `,
  }),
};

export const WithFormControl: Story = {
  render: (args: Story["args"]) => ({
    components: {
      FormControl,
      Autocomplete,
    },

    setup() {
      const value = ref<Value>(undefined);

      return {
        args,
        value,
      };
    },

    template: `
      <FormControl
        label="Country"
        helperText="Search your country."
      >
        <Autocomplete
          v-bind="args"
          v-model="value"
        />
      </FormControl>
    `,
  }),
};
