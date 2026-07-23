import type { Preview } from '@storybook/angular-vite';
import { applicationConfig } from '@storybook/angular-vite';
import { provideZoneChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';

import '@xron-ui/angular/styles.css';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({
          eventCoalescing: true,
        }),
      ],
    }),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
