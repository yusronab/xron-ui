import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { PageSize } from "@xron-ui/react";

const meta = {
  title: "Components/PageSize",
  component: PageSize,
  parameters: {
    layout: "centered",
  },
  args: {
    value: 10,
  },
} satisfies Meta<typeof PageSize>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <PageSize {...args} value={value} onChange={setValue} />;
  },
};

export const WithPrefix: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <PageSize
        {...args}
        value={value}
        prefix="Rows per page"
        onChange={setValue}
      />
    );
  },
};

export const WithSuffix: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <PageSize {...args} value={value} suffix="items" onChange={setValue} />
    );
  },
};

export const CustomOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState(25);

    return (
      <PageSize
        {...args}
        value={value}
        options={[
          { label: "25", value: 25 },
          { label: "50", value: 50 },
          { label: "100", value: 100 },
          { label: "250", value: 250 },
        ]}
        onChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <PageSize {...args} value={value} onChange={setValue} />;
  },
};

export const Playground: Story = {
  args: {
    prefix: "Rows per page",
    suffix: "items",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <PageSize {...args} value={value} onChange={setValue} />;
  },
};
