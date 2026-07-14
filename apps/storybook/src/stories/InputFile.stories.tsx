import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputFile } from "@xron-ui/react";

const meta = {
  title: "Components/InputFile",
  component: InputFile,
  tags: ["autodocs"],

  args: {
    placeholder: "Choose file...",
    disabled: false,
    error: false,
    rounded: false,
    preview: false,
    multiple: false,
    size: "md",
  },

  argTypes: {
    placeholder: {
      control: "text",
    },

    size: {
      control: "radio",
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

    multiple: {
      control: "boolean",
    },

    previewShape: {
      control: "radio",
      options: ["square", "circle"],
    },

    previewSize: {
      control: "number",
    },
  },
} satisfies Meta<typeof InputFile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<File | File[] | null>(null);

    return (
      <div className="max-w-md">
        <InputFile {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Showcase: Story = {
  render: () => {
    const ShowcaseItem = ({
      title,
      children,
    }: {
      title: string;
      children: React.ReactNode;
    }) => (
      <div className="space-y-2">
        <h3 className="font-semibold">{title}</h3>
        {children}
      </div>
    );

    const [single, setSingle] = useState<File | File[] | null>(null);
    const [multiple, setMultiple] = useState<File | File[] | null>(null);
    const [preview, setPreview] = useState<File | File[] | null>(null);

    return (
      <div className="flex max-w-xl flex-col gap-6">
        <ShowcaseItem title="Default">
          <InputFile value={single} onChange={setSingle} />
        </ShowcaseItem>

        <ShowcaseItem title="Preview">
          <InputFile
            value={preview}
            preview
            accept="image/*"
            onChange={setPreview}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Multiple">
          <InputFile multiple value={multiple} onChange={setMultiple} />
        </ShowcaseItem>

        <ShowcaseItem title="Disabled">
          <InputFile disabled />
        </ShowcaseItem>

        <ShowcaseItem title="Error">
          <InputFile error />
        </ShowcaseItem>
      </div>
    );
  },
};

export const Preview: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<File | File[] | null>(null);

    return (
      <InputFile
        {...args}
        preview
        accept="image/*"
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Multiple: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<File | File[] | null>(null);

    return <InputFile {...args} multiple value={value} onChange={setValue} />;
  },
};

export const CirclePreview: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<File | File[] | null>(null);

    return (
      <InputFile
        {...args}
        preview
        previewShape="circle"
        accept="image/*"
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ErrorState: Story = {
  name: "Error",
  args: {
    error: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Upload your profile picture",
  },
};
