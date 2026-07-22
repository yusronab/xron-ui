import { ref } from "vue";

import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { PageSize } from "@xron-ui/vue";

const customOptions = [
  {
    label: "5",
    value: 5,
  },
  {
    label: "10",
    value: 10,
  },
  {
    label: "25",
    value: 25,
  },
  {
    label: "50",
    value: 50,
  },
];

const meta = {
  title: "Components/PageSize",

  component: PageSize,

  args: {
    modelValue: 10,
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
      PageSize,
    },

    setup() {
      const value = ref(10);

      return {
        args,
        value,
      };
    },

    template: `
      <PageSize
        v-bind="args"
        v-model="value"
      />
    `,
  }),
} satisfies Meta<typeof PageSize>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

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

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const CustomOptions: Story = {
  args: {
    options: customOptions,
  },
};

export const PrefixSuffix: Story = {
  render: (args: Story["args"]) => ({
    components: {
      PageSize,
    },

    setup() {
      const value = ref(10);

      return {
        args,
        value,
      };
    },

    template: `
      <PageSize
        v-bind="args"
        v-model="value"
      >
        <template #prefix>
          Show
        </template>

        <template #suffix>
          entries
        </template>
      </PageSize>
    `,
  }),
};
