import { computed, ref } from "vue";

import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { PageSize, Pagination } from "@xron-ui/vue";

const meta = {
  title: "Components/Pagination",

  component: Pagination,

  args: {
    page: 1,
    pageSize: 10,
    total: 250,
  },

  argTypes: {
    siblingCount: {
      control: {
        type: "number",
        min: 0,
        max: 3,
      },
    },

    buttonVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger"],
    },

    buttonSize: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    buttonRounded: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Pagination,
    },

    setup() {
      const page = ref(args.page);

      return {
        args,
        page,
      };
    },

    template: `
      <Pagination
        v-bind="args"
        :page="page"
        @page-change="page = $event"
      />
    `,
  }),
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const SmallButtons: Story = {
  args: {
    buttonSize: "sm",
  },
};

export const MediumButtons: Story = {
  args: {
    buttonSize: "md",
  },
};

export const LargeButtons: Story = {
  args: {
    buttonSize: "lg",
  },
};

export const RoundedButtons: Story = {
  args: {
    buttonRounded: true,
  },
};

export const SecondaryVariant: Story = {
  args: {
    buttonVariant: "secondary",
  },
};

export const SuccessVariant: Story = {
  args: {
    buttonVariant: "success",
  },
};

export const WarningVariant: Story = {
  args: {
    buttonVariant: "warning",
  },
};

export const DangerVariant: Story = {
  args: {
    buttonVariant: "danger",
  },
};

export const ManyPages: Story = {
  args: {
    total: 5000,
  },
};

export const SiblingCountTwo: Story = {
  args: {
    siblingCount: 2,
    total: 500,
  },
};

export const WithPageSize: Story = {
  render: () => ({
    components: {
      Pagination,
      PageSize,
    },

    setup() {
      const page = ref(1);
      const pageSize = ref(10);

      const total = 250;

      const maxPage = computed(() => Math.ceil(total / pageSize.value));

      function changePage(value: number) {
        page.value = value;
      }

      function changePageSize(value: number) {
        pageSize.value = value;

        if (page.value > maxPage.value) {
          page.value = maxPage.value;
        }
      }

      return {
        page,
        pageSize,
        total,
        changePage,
        changePageSize,
      };
    },

    template: `
      <div class="flex items-center justify-between gap-4">
        <PageSize
          v-model="pageSize"
          @change="changePageSize"
        />

        <Pagination
          :page="page"
          :page-size="pageSize"
          :total="total"
          @page-change="changePage"
        />
      </div>
    `,
  }),
};
