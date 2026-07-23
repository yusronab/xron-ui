import type { StorybookConfig } from '@storybook/angular-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/angular-vite',
    options: {
      compodoc: false,
    },
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      base: process.env.NODE_ENV === 'production' ? '/xron-ui/angular/' : '/',
    });
  },
};
export default config;
