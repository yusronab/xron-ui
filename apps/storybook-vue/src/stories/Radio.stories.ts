import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { FormControl, Radio, RadioGroup } from "@xron-ui/vue";

const meta = {
  title: "Components/Radio",
  component: Radio,

  argTypes: {
    error: {
      control: "boolean",
    },
  },

  render: (args) => ({
    components: {
      Radio,
      RadioGroup,
    },

    setup() {
      const value = ref("male");

      return {
        args,
        value,
      };
    },

    template: `
      <RadioGroup v-model="value">
        <Radio
          v-bind="args"
          value="male"
        >
          Male
        </Radio>

        <Radio
          value="female"
        >
          Female
        </Radio>
      </RadioGroup>
    `,
  }),
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      Radio,
      RadioGroup,
      FormControl,
    },

    setup() {
      const gender = ref("male");
      const plan = ref("pro");

      return {
        gender,
        plan,
      };
    },

    template: `
      <div class="flex flex-col gap-8">

        <FormControl label="Gender">
          <RadioGroup v-model="gender">
            <Radio value="male">
              Male
            </Radio>

            <Radio value="female">
              Female
            </Radio>

            <Radio value="other">
              Other
            </Radio>
          </RadioGroup>
        </FormControl>

        <FormControl label="Plan">
          <RadioGroup v-model="plan">
            <Radio value="free">
              Free
            </Radio>

            <Radio value="pro">
              Pro
            </Radio>

            <Radio value="enterprise">
              Enterprise
            </Radio>
          </RadioGroup>
        </FormControl>

      </div>
    `,
  }),
};

export const ErrorVariant: Story = {
  render: () => ({
    components: {
      Radio,
      RadioGroup,
      FormControl,
    },

    setup() {
      const value = ref("");

      return {
        value,
      };
    },

    template: `
      <FormControl
        label="Gender"
        error="Please select a gender."
      >
        <RadioGroup v-model="value">
          <Radio
            value="male"
            error
          >
            Male
          </Radio>

          <Radio
            value="female"
            error
          >
            Female
          </Radio>
        </RadioGroup>
      </FormControl>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: {
      Radio,
      RadioGroup,
    },

    setup() {
      const value = ref("male");

      return {
        value,
      };
    },

    template: `
      <RadioGroup v-model="value">
        <Radio
          value="male"
          disabled
        >
          Male
        </Radio>

        <Radio
          value="female"
          disabled
        >
          Female
        </Radio>
      </RadioGroup>
    `,
  }),
};
