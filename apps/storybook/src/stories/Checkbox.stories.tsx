import { useArgs } from "storybook/internal/preview-api";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "@xron-ui/react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],

  args: {
    label: "Accept terms and conditions",
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
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    return (
      <Checkbox
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
      <Checkbox label="Default" checked={false} onCheckedChange={() => {}} />

      <Checkbox label="Checked" checked onCheckedChange={() => {}} />

      <Checkbox
        label="Error"
        error
        checked={false}
        onCheckedChange={() => {}}
      />

      <Checkbox
        label="Disabled"
        disabled
        checked={false}
        onCheckedChange={() => {}}
      />

      <Checkbox
        label="Disabled Checked"
        disabled
        checked
        onCheckedChange={() => {}}
      />

      <Checkbox checked onCheckedChange={() => {}} />
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

export const ErrorState: Story = {
  name: "Error",
  args: {
    label: "Error",
    error: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: true,
  },
};
