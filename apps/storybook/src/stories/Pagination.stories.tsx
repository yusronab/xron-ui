import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "@xron-ui/react";

const meta = {
  title: "Components/Pagination",
  component: Pagination,

  parameters: {
    layout: "centered",
  },

  args: {
    page: 1,
    pageSize: 10,
    total: 250,
    siblingCount: 1,

    buttonVariant: "primary",
    buttonSize: "md",
    buttonRounded: false,

    onPageChange: () => {},
  },

  argTypes: {
    buttonVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
    },

    buttonSize: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },

    buttonRounded: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

function StatefulPagination(args: React.ComponentProps<typeof Pagination>) {
  const [page, setPage] = useState(args.page);

  return (
    <Pagination
      {...args}
      page={page}
      onPageChange={(page) => {
        setPage(page);
        args.onPageChange(page);
      }}
    />
  );
}

export const Playground: Story = {
  render: (args) => <StatefulPagination {...args} />,
};

export const Default: Story = {
  render: (args) => <StatefulPagination {...args} />,
};

export const Small: Story = {
  args: {
    buttonSize: "sm",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Medium: Story = {
  args: {
    buttonSize: "md",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Large: Story = {
  args: {
    buttonSize: "lg",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Rounded: Story = {
  args: {
    buttonRounded: true,
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Primary: Story = {
  args: {
    buttonVariant: "primary",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Secondary: Story = {
  args: {
    buttonVariant: "secondary",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Success: Story = {
  args: {
    buttonVariant: "success",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Warning: Story = {
  args: {
    buttonVariant: "warning",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const ErrorVariant: Story = {
  args: {
    buttonVariant: "error",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const ManyPages: Story = {
  args: {
    total: 1000,
  },
  render: (args) => <StatefulPagination {...args} />,
};
