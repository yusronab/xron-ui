import { computed, ref } from "vue";

import type { Meta, StoryObj } from "@storybook/vue3-vite";

import {
  type TableSorting,
  Badge,
  PageSize,
  Pagination,
  Table,
} from "@xron-ui/vue";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    status: "Pending",
  },
  {
    id: 3,
    name: "Alex Smith",
    email: "alex@example.com",
    status: "Inactive",
  },
];

const columns = [
  {
    key: "name",
    title: "Name",
    sortable: true,
  },
  {
    key: "email",
    title: "Email",
    sortable: true,
  },
  {
    key: "status",
    title: "Status",
  },
];

const meta = {
  title: "Components/Table",

  component: Table,

  args: {
    columns,
    data: users,
    rowKey: "id",
    striped: true,
  },

  argTypes: {
    striped: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Table,
    },

    setup() {
      const sorting = ref<TableSorting>({
        field: undefined,
        direction: null,
      });

      function handleSort(field?: string, direction?: "asc" | "desc" | null) {
        sorting.value = {
          field,
          direction: direction ?? null,
        };
      }

      return {
        args,
        sorting,
        handleSort,
      };
    },

    template: `
<Table
  v-bind="args"
  :sorting="sorting"
  @sort="handleSort"
/>
    `,
  }),
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const WithoutStriped: Story = {
  args: {
    striped: false,
  },
};

export const Selection: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Table,
    },

    setup() {
      const selected = ref<Array<string | number>>([]);

      const selection = computed(() => ({
        selectedRowKeys: selected.value,
      }));

      function handleSelection(keys: Array<string | number>) {
        selected.value = keys;
      }

      return {
        args,
        selection,
        handleSelection,
      };
    },

    template: `
<Table
  v-bind="args"
  :selection="selection"
  @selection-change="handleSelection"
/>
    `,
  }),
};

export const CustomCells: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Table,
      Badge,
    },

    setup() {
      return {
        args,
      };
    },

    template: `
<Table
  v-bind="args"
>
  <template #email="{ value }">
    <a
      :href="\`mailto:\${value}\`"
      class="text-blue-600 underline"
    >
      {{ value }}
    </a>
  </template>

  <template #status="{ value }">
    <Badge>
      {{ value }}
    </Badge>
  </template>
</Table>
    `,
  }),
};

export const CustomHeader: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Table,
    },

    setup() {
      return {
        args,
      };
    },

    template: `
<Table
  v-bind="args"
>
  <template #header-email>
    📧 Email
  </template>

  <template #header-status>
    Status
  </template>
</Table>
    `,
  }),
};

export const CustomEmpty: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Table,
    },

    setup() {
      return {
        args,
      };
    },

    template: `
<Table
  v-bind="args"
  :data="[]"
>
  <template #empty>
    No users found.
  </template>
</Table>
    `,
  }),
};

export const WithPagination: Story = {
  render: (args: Story["args"]) => ({
    components: {
      Table,
      Pagination,
      PageSize,
    },

    setup() {
      const page = ref(1);
      const pageSize = ref(10);

      const data = computed(() => {
        return Array.from(
          {
            length: 100,
          },
          (_, index) => ({
            id: index + 1,
            name: `User ${index + 1}`,
            email: `user${index + 1}@example.com`,
            status: index % 2 === 0 ? "Active" : "Inactive",
          }),
        );
      });

      const paginatedData = computed(() => {
        const start = (page.value - 1) * pageSize.value;

        return data.value.slice(start, start + pageSize.value);
      });

      const totalPages = computed(() =>
        Math.ceil(data.value.length / pageSize.value),
      );

      function handlePageChange(value: number) {
        page.value = value;
      }

      function handlePageSizeChange(value: number) {
        pageSize.value = value;

        if (page.value > totalPages.value) {
          page.value = totalPages.value;
        }
      }

      return {
        args,
        page,
        pageSize,
        data,
        paginatedData,
        handlePageChange,
        handlePageSizeChange,
      };
    },

    template: `
<div class="space-y-4">
  <Table
    v-bind="args"
    :data="paginatedData"
  />

  <div
    class="flex items-center justify-between gap-4"
  >
    <PageSize
      v-model="pageSize"
      @change="handlePageSizeChange"
    />

    <Pagination
      :page="page"
      :page-size="pageSize"
      :total="data.length"
      @page-change="handlePageChange"
    />
  </div>
</div>
`,
  }),
};
