import { computed, ref } from "vue";

import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { type TableSorting, Badge, Table } from "@xron-ui/vue";

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
