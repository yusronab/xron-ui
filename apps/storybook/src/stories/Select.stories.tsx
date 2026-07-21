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

    clearable: {
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
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<string | number>();

    return (
      <div className="max-w-sm">
        <Select {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

type ShowcaseSectionProps = Readonly<{
  title: string;
  children: React.ReactNode;
}>;

function ShowcaseSection({ title, children }: ShowcaseSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">{title}</h3>
      {children}
    </div>
  );
}

function ShowcaseContent() {
  const [value, setValue] = useState<string | number>();

  return (
    <div className="flex max-w-sm flex-col gap-8 space-y-8">
      <ShowcaseSection title="Default">
        <Select
          value={value}
          options={options}
          labelKey="name"
          valueKey="id"
          onChange={setValue}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Custom Option">
        <Select
          value={value}
          options={options}
          labelKey="name"
          valueKey="id"
          onChange={setValue}
          renderOption={(option, { selected }) => (
            <div className="flex w-full items-center justify-between">
              <span>{String(option.name)}</span>

              {selected && (
                <span className="text-xs font-medium text-blue-600">
                  Selected
                </span>
              )}
            </div>
          )}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Custom Value">
        <Select
          value={value}
          options={options}
          labelKey="name"
          valueKey="id"
          onChange={setValue}
          renderValue={(option) =>
            option ? (
              <span className="font-semibold text-blue-600">
                🚀 {String(option.name)}
              </span>
            ) : (
              "Select framework"
            )
          }
        />
      </ShowcaseSection>

      <ShowcaseSection title="Loading">
        <Select loading options={options} labelKey="name" valueKey="id" />
      </ShowcaseSection>

      <ShowcaseSection title="Clearable">
        <Select
          clearable
          value={value}
          options={options}
          onChange={setValue}
          labelKey="name"
          valueKey="id"
        />
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
}

export const Showcase: Story = {
  render: () => <ShowcaseContent />,
};

export const Default: Story = {};

export const CustomOption: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<string | number>();

    return (
      <div className="max-w-sm">
        <Select
          {...args}
          value={value}
          onChange={setValue}
          renderOption={(option, { selected }) => (
            <div className="flex w-full items-center justify-between">
              <span>{String(option.name)}</span>

              {selected && (
                <span className="text-xs font-medium text-blue-600">
                  Selected
                </span>
              )}
            </div>
          )}
        />
      </div>
    );
  },
};

export const CustomValue: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<string | number>();

    return (
      <div className="max-w-sm">
        <Select
          {...args}
          value={value}
          onChange={setValue}
          renderValue={(option) =>
            option ? (
              <span className="font-semibold text-blue-600">
                🚀 {String(option.name)}
              </span>
            ) : (
              "Select framework"
            )
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

export const Clearable: Story = {
  args: {
    clearable: true,
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
