import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "@xron-ui/react";

const options = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Vue",
  },
  {
    id: 3,
    name: "Angular",
  },
  {
    id: 4,
    name: "Svelte",
  },
];

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],

  args: {
    placeholder: "Select framework",
    options,
    labelKey: "name",
    valueKey: "id",
    loading: false,
    disabled: false,
    error: false,
    rounded: false,
    size: "md",
  },

  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    loading: {
      control: "boolean",
    },

    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<string | number>();

    return (
      <div className="max-w-sm">
        <Select {...args} value={value} onChange={(value) => setValue(value)} />
      </div>
    );
  },
};

export const Showcase: Story = {
  render: () => {
    const ShowcaseSection = ({
      title,
      children,
    }: {
      title: string;
      children: React.ReactNode;
    }) => (
      <div className="space-y-2">
        <h3 className="font-semibold">{title}</h3>
        {children}
      </div>
    );

    const [value, setValue] = useState<string | number>();

    return (
      <div className="flex max-w-sm flex-col gap-6">
        <ShowcaseSection title="Default">
          <Select
            value={value}
            options={options}
            labelKey="name"
            valueKey="id"
            onChange={setValue}
          />
        </ShowcaseSection>

        <ShowcaseSection title="Loading">
          <Select loading options={options} labelKey="name" valueKey="id" />
        </ShowcaseSection>

        <ShowcaseSection title="Empty">
          <Select options={[]} labelKey="name" valueKey="id" />
        </ShowcaseSection>

        <ShowcaseSection title="Disabled">
          <Select disabled options={options} labelKey="name" valueKey="id" />
        </ShowcaseSection>

        <ShowcaseSection title="Error">
          <Select error options={options} labelKey="name" valueKey="id" />
        </ShowcaseSection>

        <ShowcaseSection title="Rounded">
          <Select rounded options={options} labelKey="name" valueKey="id" />
        </ShowcaseSection>
      </div>
    );
  },
};

export const Default: Story = {};

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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ErrorState: Story = {
  name: "Error",
  args: {
    error: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};
