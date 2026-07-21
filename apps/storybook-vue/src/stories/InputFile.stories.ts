import { ref, watch } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { InputFile } from "@xron-ui/vue";

const meta = {
  title: "Components/InputFile",
  component: InputFile,

  args: {
    modelValue: null,
    placeholder: "Choose file...",
  },

  argTypes: {
    placeholder: {
      control: "text",
    },

    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "boolean",
    },

    error: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    preview: {
      control: "boolean",
    },

    previewShape: {
      control: "inline-radio",
      options: ["square", "circle"],
    },

    previewSize: {
      control: {
        type: "number",
        min: 40,
        max: 300,
        step: 10,
      },
    },

    maxSize: {
      control: "number",
    },

    allowedTypes: {
      control: "object",
    },
  },

  render: (args) => ({
    components: {
      InputFile,
    },

    setup() {
      const files = ref<File | File[] | null>(args.modelValue);

      watch(
        () => args.modelValue,
        (value) => {
          files.value = value;
        },
      );

      return {
        args,
        files,
      };
    },

    template: `
      <div class="w-96">
        <InputFile
          v-bind="args"
          v-model="files"
        />
      </div>
    `,
  }),
} satisfies Meta<typeof InputFile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => ({
    components: {
      InputFile,
    },

    setup() {
      const single = ref<File | null>(null);
      const preview = ref<File | null>(null);
      const multiple = ref<File[]>([]);

      return {
        single,
        preview,
        multiple,
      };
    },

    template: `
      <div class="flex w-96 flex-col gap-4">

        <InputFile
          v-model="single"
          placeholder="Default"
        />

        <InputFile
          v-model="preview"
          preview
          accept="image/*"
          placeholder="Image Preview"
        />

        <InputFile
          v-model="multiple"
          multiple
          placeholder="Multiple Files"
        />

        <InputFile
          rounded
          placeholder="Rounded"
        />

        <InputFile
          error
          placeholder="Error"
        />

        <InputFile
          disabled
          placeholder="Disabled"
        />

      </div>
    `,
  }),
};

export const Preview: Story = {
  args: {
    preview: true,
    placeholder: "Choose image...",
    accept: "image/*",
  },
};

export const Multiple: Story = {
  args: {
    placeholder: "Choose files...",
    multiple: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const ErrorVariant: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
