import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { Input, Label } from "@xron-ui/vue";

const meta = {
  title: "Components/Label",
  component: Label,

  args: {
    htmlFor: "email",
  },

  argTypes: {
    htmlFor: {
      control: "text",
    },
  },

  render: (args) => ({
    components: {
      Label,
      Input,
    },

    setup() {
      return {
        args,
      };
    },

    template: `
      <div class="w-80 space-y-2">
        <Label v-bind="args">
          Email Address
        </Label>

        <Input
          id="email"
          placeholder="Enter your email"
        />
      </div>
    `,
  }),
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      Label,
      Input,
    },

    template: `
      <div class="flex w-80 flex-col gap-6">

        <div class="space-y-2">
          <Label htmlFor="name">
            Name
          </Label>

          <Input
            id="name"
            placeholder="John Doe"
          />
        </div>

        <div class="space-y-2">
          <Label htmlFor="email">
            Email Address
          </Label>

          <Input
            id="email"
            placeholder="john@example.com"
          />
        </div>

        <div class="space-y-2">
          <Label htmlFor="password">
            Password
          </Label>

          <Input
            id="password"
            type="password"
            placeholder="••••••••"
          />
        </div>

      </div>
    `,
  }),
};
