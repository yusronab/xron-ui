import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { MultiSelect } from "@xron-ui/react";

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
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],

  args: {
    placeholder: "Select frameworks",
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

    renderOption: {
      control: false,
    },

    renderValue: {
      control: false,
    },

    onChange: {
      control: false,
    },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

function ShowcaseSection({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">{title}</h3>
      {children}
    </div>
  );
}

function ShowcaseContent() {
  const [values, setValues] = useState<Array<string | number>>([]);

  return (
    <div className="flex max-w-sm flex-col gap-6">
      <ShowcaseSection title="Default">
        <MultiSelect
          values={values}
          options={options}
          labelKey="name"
          valueKey="id"
          onChange={setValues}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Custom Option">
        <MultiSelect
          values={values}
          options={options}
          labelKey="name"
          valueKey="id"
          onChange={setValues}
          renderOption={(option) => (
            <div className="flex flex-col">
              <span className="font-medium">{String(option.name)}</span>

              <span className="text-xs text-gray-500">Frontend Framework</span>
            </div>
          )}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Custom Value">
        <MultiSelect
          values={values}
          options={options}
          labelKey="name"
          valueKey="id"
          onChange={setValues}
          renderValue={(options) =>
            options.length > 0
              ? `${options.length} framework(s) selected`
              : "Select frameworks"
          }
        />
      </ShowcaseSection>

      <ShowcaseSection title="Loading">
        <MultiSelect loading options={options} labelKey="name" valueKey="id" />
      </ShowcaseSection>

      <ShowcaseSection title="Empty">
        <MultiSelect options={[]} labelKey="name" valueKey="id" />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled">
        <MultiSelect disabled options={options} labelKey="name" valueKey="id" />
      </ShowcaseSection>

      <ShowcaseSection title="Error">
        <MultiSelect error options={options} labelKey="name" valueKey="id" />
      </ShowcaseSection>

      <ShowcaseSection title="Rounded">
        <MultiSelect rounded options={options} labelKey="name" valueKey="id" />
      </ShowcaseSection>
    </div>
  );
}

export const Playground: Story = {
  render: function Render(args) {
    const [values, setValues] = useState<Array<string | number>>([]);

    return (
      <div className="max-w-sm">
        <MultiSelect {...args} values={values} onChange={setValues} />
      </div>
    );
  },
};

export const Showcase: Story = {
  render: () => <ShowcaseContent />,
};

export const Default: Story = {};

export const CustomOption: Story = {
  render: function Render(args) {
    const [values, setValues] = useState<Array<string | number>>([]);

    return (
      <div className="max-w-sm">
        <MultiSelect
          {...args}
          values={values}
          onChange={setValues}
          renderOption={(option) => (
            <div className="flex flex-col">
              <span className="font-medium">{String(option.name)}</span>

              <span className="text-xs text-gray-500">Frontend Framework</span>
            </div>
          )}
        />
      </div>
    );
  },
};

export const CustomValue: Story = {
  render: function Render(args) {
    const [values, setValues] = useState<Array<string | number>>([]);

    return (
      <div className="max-w-sm">
        <MultiSelect
          {...args}
          values={values}
          onChange={setValues}
          renderValue={(options) =>
            options.length > 0
              ? `${options.length} framework(s) selected`
              : "Select frameworks"
          }
        />
      </div>
    );
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
