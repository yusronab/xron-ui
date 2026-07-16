import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Modal } from "@xron-ui/react";
import type { ModalProps } from "@xron-ui/react";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],

  args: {
    open: false,
    size: "md",
    closeOnEscape: true,
    closeOnOverlayClick: true,
    children: <p>Modal Example</p>,
  },

  argTypes: {
    open: {
      control: "boolean",
    },

    size: {
      control: "radio",
      options: ["sm", "md", "lg", "xl", "full"],
    },

    closeOnEscape: {
      control: "boolean",
    },

    closeOnOverlayClick: {
      control: "boolean",
    },

    onClose: {
      action: "closed",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalDemo = (args: ModalProps) => {
  const [open, setOpen] = useState(args.open);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        {...args}
        open={open}
        onClose={() => {
          setOpen(false);
          args.onClose?.();
        }}
      >
        <div className="space-y-4 p-6">
          <h2 className="text-xl font-semibold">Delete User</h2>

          <p className="text-gray-600 dark:text-gray-400">
            This action cannot be undone.
          </p>

          <div className="flex justify-end gap-2">
            <Button appearance="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>

            <Button variant="error">Delete</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const ModalShowcase = () => {
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);
  const [xl, setXl] = useState(false);
  const [full, setFull] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => setSm(true)}>Small</Button>

      <Button onClick={() => setMd(true)}>Medium</Button>

      <Button onClick={() => setLg(true)}>Large</Button>

      <Button onClick={() => setXl(true)}>Extra Large</Button>

      <Button onClick={() => setFull(true)}>Full</Button>

      <Modal open={sm} size="sm" onClose={() => setSm(false)}>
        <div className="p-6">Small Modal</div>
      </Modal>

      <Modal open={md} size="md" onClose={() => setMd(false)}>
        <div className="p-6">Medium Modal</div>
      </Modal>

      <Modal open={lg} size="lg" onClose={() => setLg(false)}>
        <div className="p-6">Large Modal</div>
      </Modal>

      <Modal open={xl} size="xl" onClose={() => setXl(false)}>
        <div className="p-6">Extra Large Modal</div>
      </Modal>

      <Modal open={full} size="full" onClose={() => setFull(false)}>
        <div className="p-6">Full Modal</div>
      </Modal>
    </div>
  );
};

export const Playground: Story = {
  args: {
    open: false,
  },

  render: (args) => <ModalDemo {...args} />,
};

export const Showcase: Story = {
  args: {},

  render: () => <ModalShowcase />,
};

export const Small: Story = {
  args: {
    open: false,
    size: "sm",
  },

  render: (args) => <ModalDemo {...args} />,
};

export const Medium: Story = {
  args: {
    open: false,
    size: "md",
  },

  render: (args) => <ModalDemo {...args} />,
};

export const Large: Story = {
  args: {
    open: false,
    size: "lg",
  },

  render: (args) => <ModalDemo {...args} />,
};

export const ExtraLarge: Story = {
  args: {
    open: false,
    size: "xl",
  },

  render: (args) => <ModalDemo {...args} />,
};

export const Full: Story = {
  args: {
    open: false,
    size: "full",
  },

  render: (args) => <ModalDemo {...args} />,
};

export const DisableOverlayClose: Story = {
  args: {
    open: false,
    closeOnOverlayClick: false,
  },

  render: (args) => <ModalDemo {...args} />,
};

export const DisableEscapeClose: Story = {
  args: {
    open: false,
    closeOnEscape: false,
  },

  render: (args) => <ModalDemo {...args} />,
};
