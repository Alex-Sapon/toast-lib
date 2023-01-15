const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../', 'src'),
      '@/assets': path.resolve(__dirname, '../', 'src/assets'),
      '@/components': path.resolve(__dirname, '../', 'src/components'),
      '@/constants': path.resolve(__dirname, '../', 'src/constants'),
      '@/helpers': path.resolve(__dirname, '../', 'src/helpers'),
      '@/utils': path.resolve(__dirname, '../', 'src/utils'),
      '@/styles': path.resolve(__dirname, '../', 'src/styles'),
      '@/hooks': path.resolve(__dirname, '../', 'src/hooks'),
    };
    return config;
  },
};
