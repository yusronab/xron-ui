import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],

  addons: ["@storybook/addon-docs"],
};

export default config;
