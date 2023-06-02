/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/**/*.stories.mdx", 
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
