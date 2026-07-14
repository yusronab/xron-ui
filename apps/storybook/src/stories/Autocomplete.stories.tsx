import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Autocomplete } from "@xron-ui/react";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Michael Johnson" },
  { id: 4, name: "Emily Davis" },
  { id: 5, name: "William Brown" },
  { id: 6, name: "Olivia Wilson" },
];

const meta = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],

  args: {
    options: users,
    labelKey: "name",
    valueKey: "id",
    placeholder: "Search user...",
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

    loading: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    clearable: {
      control: "boolean",
    },

    debounce: {
      control: "number",
    },

    onSearch: {
      control: false,
    },

    onChange: {
      action: "change",
    },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-4">
      <Autocomplete
        options={users}
        labelKey="name"
        valueKey="id"
        placeholder="Default"
      />

      <Autocomplete
        options={users}
        labelKey="name"
        valueKey="id"
        placeholder="Rounded"
        rounded
      />

      <Autocomplete
        options={users}
        labelKey="name"
        valueKey="id"
        placeholder="Clearable"
        clearable
      />

      <Autocomplete
        options={users}
        labelKey="name"
        valueKey="id"
        placeholder="Loading"
        loading
      />

      <Autocomplete
        options={[]}
        labelKey="name"
        valueKey="id"
        placeholder="Empty"
      />

      <Autocomplete
        options={users}
        labelKey="name"
        valueKey="id"
        placeholder="Disabled"
        disabled
      />

      <Autocomplete
        options={users}
        labelKey="name"
        valueKey="id"
        placeholder="Error"
        error
      />
    </div>
  ),
};

export const Default: Story = {};

export const Clearable: Story = {
  args: {
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
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

function AsyncSearchExample(props: React.ComponentProps<typeof Autocomplete>) {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(users);

  async function handleSearch(keyword: string) {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    setOptions(
      users.filter((user) =>
        user.name.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );

    setLoading(false);
  }

  return (
    <Autocomplete
      {...props}
      loading={loading}
      options={options}
      onSearch={handleSearch}
    />
  );
}

export const AsyncSearch: Story = {
  render: (args) => <AsyncSearchExample {...args} />,
};
