import { useMemo, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  PageSize,
  Pagination,
  Table,
  type SortDirection,
} from "@xron-ui/react";
import { columns, users, type User } from "../data";

const meta = {
  title: "UI/Table Example",
  parameters: {
    layout: "padded",
  },
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

  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] = useState(10);

  const sortedUsers = useMemo(() => {
    if (!sorting.field || !sorting.direction) {
      return users;
    }

    return [...users].sort((a, b) => {
      const first = String(a[sorting.field]);
      const second = String(b[sorting.field]);

      const result = first.localeCompare(second);

      return sorting.direction === "asc" ? result : -result;
    });
  }, [sorting]);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;

    return sortedUsers.slice(start, start + pageSize);
  }, [sortedUsers, page, pageSize]);

  return (
    <div className="flex flex-col gap-4">
      <Table<User, "id">
        rowKey="id"
        data={paginatedUsers}
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

      <div className="flex items-center justify-between">
        <PageSize
          prefix={<span className="text-sm">Rows per page</span>}
          value={pageSize}
          onChange={(value) => {
            setPageSize(value);
            setPage(1);
          }}
        />

        <Pagination
          page={page}
          pageSize={pageSize}
          total={sortedUsers.length}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export const Playground: Story = {
  render: () => <PlaygroundTable />,
};
