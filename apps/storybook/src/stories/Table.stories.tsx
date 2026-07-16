import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table, type SortDirection, type TableColumn } from "@xron-ui/react";
import { columns, users, type User } from "../data";

const meta = {
  title: "Components/Table",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function PlaygroundTable() {
  const [sorting, setSorting] = useState<{
    field?: keyof User;
    direction?: SortDirection;
  }>({
    direction: null,
  });

  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  return (
    <Table<User, "id">
      rowKey="id"
      data={users}
      columns={columns}
      striped
      sorting={{
        field: sorting.field,
        direction: sorting.direction,
        onSort(field, direction) {
          setSorting({
            field,
            direction,
          });
        },
      }}
      selection={{
        selectedRowKeys: selectedRows,
        onChange: setSelectedRows,
      }}
    />
  );
}

export const Playground: Story = {
  render: () => <PlaygroundTable />,
};

export const Basic: Story = {
  render: () => (
    <Table<User, "id"> rowKey="id" data={users} columns={columns} striped />
  ),
};

export const Empty: Story = {
  render: () => (
    <Table<User, "id">
      rowKey="id"
      data={[]}
      columns={columns}
      emptyText="No users found"
    />
  ),
};

function SortingTable() {
  const [sorting, setSorting] = useState<{
    field?: keyof User;
    direction?: SortDirection;
  }>({
    direction: null,
  });

  return (
    <Table<User, "id">
      rowKey="id"
      data={users}
      columns={columns}
      striped
      sorting={{
        field: sorting.field,
        direction: sorting.direction,
        onSort(field, direction) {
          setSorting({
            field,
            direction,
          });
        },
      }}
    />
  );
}

export const Sorting: Story = {
  render: () => <SortingTable />,
};

function SelectionTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  return (
    <Table<User, "id">
      rowKey="id"
      data={users}
      columns={columns}
      striped
      selection={{
        selectedRowKeys: selectedRows,
        onChange: setSelectedRows,
      }}
    />
  );
}

export const Selection: Story = {
  render: () => <SelectionTable />,
};

const customColumns: TableColumn<User>[] = [
  {
    key: "name",
    title: "User",
    render(value, row) {
      return (
        <div className="flex flex-col">
          <span className="font-medium">{value}</span>

          <span className="text-xs text-gray-500">{row.email}</span>
        </div>
      );
    },
  },
  {
    key: "role",
    title: "Role",
    render(value) {
      return (
        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          {value}
        </span>
      );
    },
  },
];

export const CustomRender: Story = {
  render: () => (
    <Table<User, "id">
      rowKey="id"
      data={users}
      columns={customColumns}
      striped
    />
  ),
};
