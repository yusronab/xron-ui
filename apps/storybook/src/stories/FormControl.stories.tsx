import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { Autocomplete, FormControl, Input, Select } from "@xron-ui/react";

const countries = [
  {
    id: 1,
    name: "Indonesia",
  },
  {
    id: 2,
    name: "Japan",
  },
  {
    id: 3,
    name: "Singapore",
  },
];

const meta = {
  title: "Components/FormControl",

  component: FormControl,

  tags: ["autodocs"],

  args: {
    label: "Email",
    helperText: "We'll never share your email.",
    required: false,
    error: false,
  },

  argTypes: {
    required: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    label: {
      control: "text",
    },

    helperText: {
      control: "text",
    },
  },

  render: (args) => (
    <FormControl {...args}>
      <Input placeholder="Enter your email" />
    </FormControl>
  ),
} satisfies Meta<typeof FormControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
    helperText: "Email is required.",
  },

  render: (args) => (
    <FormControl {...args}>
      <Input error placeholder="Enter your email" />
    </FormControl>
  ),
};

export const WithoutHelperText: Story = {
  args: {
    helperText: undefined,
  },
};

export const WithSelect: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>();

    return (
      <FormControl {...args} label="Country" helperText="Select your country.">
        <Select
          value={value}
          onChange={setValue}
          options={countries}
          labelKey="name"
          valueKey="id"
          placeholder="Select country"
        />
      </FormControl>
    );
  },
};

export const WithAutocomplete: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>();

    return (
      <FormControl {...args} label="Country" helperText="Search your country.">
        <Autocomplete
          value={value}
          onChange={setValue}
          options={countries}
          labelKey="name"
          valueKey="id"
          placeholder="Search country"
        />
      </FormControl>
    );
  },
};

export const Showcase: Story = {
  render: () => {
    const [country, setCountry] = useState<string | number>();

    return (
      <div className="flex max-w-md flex-col gap-6">
        <FormControl label="Email" helperText="We'll never share your email.">
          <Input placeholder="Enter your email" />
        </FormControl>

        <FormControl label="Country" helperText="Select your country.">
          <Select
            value={country}
            onChange={setCountry}
            options={countries}
            labelKey="name"
            valueKey="id"
            placeholder="Select country"
          />
        </FormControl>

        <FormControl label="Country" helperText="Search your country.">
          <Autocomplete
            value={country}
            onChange={setCountry}
            options={countries}
            labelKey="name"
            valueKey="id"
            placeholder="Search country"
          />
        </FormControl>

        <FormControl
          label="Password"
          helperText="Password must be at least 8 characters."
          required
        >
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
      </div>
    );
  },
};
