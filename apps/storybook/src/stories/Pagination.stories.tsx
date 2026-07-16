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
    size: "md",
    rounded: false,
    onPageChange: () => {},
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

export const Default: Story = {
  render: (args) => <StatefulPagination {...args} />,
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Medium: Story = {
  args: {
    size: "md",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const ManyPages: Story = {
  args: {
    total: 1000,
  },
  render: (args) => <StatefulPagination {...args} />,
};

export const Playground: Story = {
  render: (args) => <StatefulPagination {...args} />,
};
