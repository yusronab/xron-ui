import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "@xron-ui/react";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],

  args: {
    placeholder: "Write something...",
    disabled: false,
    error: false,
    size: "md",
    rows: 4,
  },

  argTypes: {
    placeholder: {
      control: "text",
    },

    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    rows: {
      control: {
        type: "number",
        min: 2,
        max: 10,
      },
    },

    disabled: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    readOnly: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-6">
      <div className="space-y-2">
        <h3 className="font-semibold">States</h3>

        <Textarea placeholder="Default textarea" rows={4} />

        <Textarea placeholder="Error textarea" error rows={4} />

        <Textarea placeholder="Disabled textarea" disabled rows={4} />

        <Textarea
          readOnly
          rows={4}
          defaultValue="This is a read only textarea."
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Sizes</h3>

        <Textarea size="sm" placeholder="Small textarea" />

        <Textarea size="md" placeholder="Medium textarea" />

        <Textarea size="lg" placeholder="Large textarea" />
      </div>
    </div>
  ),
};

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Enter your message...",
  },
};

export const ErrorState: Story = {
  name: "Error",
  args: {
    error: true,
    placeholder: "This field has an error",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled textarea",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue:
      "This content cannot be edited because the textarea is read-only.",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small textarea",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium textarea",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large textarea",
  },
};
