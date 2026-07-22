import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "@xron-ui/react";

const meta = {
  title: "Components/Text",

  component: Text,

  tags: ["autodocs"],

  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    as: "p",
  },

  argTypes: {
    as: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "div",
        "small",
      ],
    },

    align: {
      control: "radio",
      options: ["left", "center", "right", "justify"],
    },

    truncate: {
      control: "boolean",
    },

    italic: {
      control: "boolean",
    },

    underline: {
      control: "boolean",
    },

    loading: {
      control: "boolean",
    },

    skeletonLines: {
      control: "number",
    },

    skeletonWidth: {
      control: "text",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Headings: Story = {
  render: () => (
    <div className="space-y-3">
      <Text as="h1">Heading 1</Text>
      <Text as="h2">Heading 2</Text>
      <Text as="h3">Heading 3</Text>
      <Text as="h4">Heading 4</Text>
      <Text as="h5">Heading 5</Text>
      <Text as="h6">Heading 6</Text>
    </div>
  ),
};

export const Paragraph: Story = {
  args: {
    as: "p",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
};

export const InlineText: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Text as="span">Active</Text>

      <Text as="small">Updated 5 minutes ago</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4">
      <Text align="left">Left aligned</Text>

      <Text align="center">Center aligned</Text>

      <Text align="right">Right aligned</Text>

      <Text align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium.
      </Text>
    </div>
  ),
};

export const Truncate: Story = {
  render: () => (
    <div style={{ width: "256px" }}>
      <Text truncate>
        This is a very long text that will be truncated when it exceeds the
        available width of its container.
      </Text>
    </div>
  ),
};

export const Emphasis: Story = {
  render: () => (
    <div className="space-y-3">
      <Text italic>Italic text</Text>

      <Text underline>Underlined text</Text>

      <Text italic underline>
        Italic and underlined
      </Text>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="space-y-4">
      <Text loading />

      <Text loading skeletonLines={3} />

      <Text as="h2" loading skeletonWidth={240} />
    </div>
  ),
};
