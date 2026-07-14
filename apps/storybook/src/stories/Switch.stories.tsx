import { useArgs } from "storybook/internal/preview-api";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "@xron-ui/react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],

  args: {
    label: "Enable notifications",
    checked: false,
    disabled: false,
    error: false,
    size: "md",
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

    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    return (
      <Switch
        {...args}
        checked={checked}
        onCheckedChange={(value) => updateArgs({ checked: value })}
      />
    );
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h3 className="font-semibold">States</h3>

        <Switch label="Default" checked={false} onCheckedChange={() => {}} />

        <Switch label="Checked" checked onCheckedChange={() => {}} />

        <Switch
          label="Error"
          error
          checked={false}
          onCheckedChange={() => {}}
        />

        <Switch
          label="Disabled"
          disabled
          checked={false}
          onCheckedChange={() => {}}
        />

        <Switch
          label="Disabled Checked"
          disabled
          checked
          onCheckedChange={() => {}}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Sizes</h3>

        <div className="flex flex-col gap-3">
          <Switch size="sm" label="Small" checked onCheckedChange={() => {}} />

          <Switch size="md" label="Medium" checked onCheckedChange={() => {}} />

          <Switch size="lg" label="Large" checked onCheckedChange={() => {}} />
        </div>
      </div>
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

export const Small: Story = {
  args: {
    label: "Small",
    size: "sm",
    checked: true,
  },
};

export const Medium: Story = {
  args: {
    label: "Medium",
    size: "md",
    checked: true,
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    size: "lg",
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: true,
  },
};
