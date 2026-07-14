import { useArgs } from "storybook/internal/preview-api";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "@xron-ui/react";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],

  args: {
    label: "Option",
    checked: false,
    disabled: false,
    error: false,
  },

  argTypes: {
    checked: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    return (
      <Radio
        {...args}
        checked={checked}
        onCheckedChange={(value) => {
          updateArgs({ checked: value });
        }}
      />
    );
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio label="Default" checked={false} onCheckedChange={() => {}} />

      <Radio label="Checked" checked onCheckedChange={() => {}} />

      <Radio label="Error" error checked={false} onCheckedChange={() => {}} />

      <Radio
        label="Disabled"
        disabled
        checked={false}
        onCheckedChange={() => {}}
      />

      <Radio
        label="Disabled Checked"
        disabled
        checked
        onCheckedChange={() => {}}
      />

      <Radio checked onCheckedChange={() => {}} />
    </div>
  ),
};

export const Default: Story = {
  args: {
    label: "Default",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked",
    checked: true,
  },
};

export const ErrorState: Story = {
  name: "Error",
  args: {
    label: "Error",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked",
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: true,
  },
};
